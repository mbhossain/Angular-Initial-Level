import {ChangeDetectorRef, Component, EventEmitter, HostBinding, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
// import {TranslateService} from '@ngx-translate/core';
import {
  ContextMenuItem,
  FilterSettingsModel,
  GridComponent,
  PageSettingsModel,
  Pager,
  PagerDropDown,
  PagerComponent
} from '@syncfusion/ej2-angular-grids';
import {L10n, setCulture} from '@syncfusion/ej2-base';
// import GridBnIntl from '../utils/grid-bangla-intl.json';
// import {StorageService} from '../../../../../../shared/services/storage.service';
// import {SearchParams} from '../../../../../../shared/model/request/search-params';
// import {PAGE_COUNT, PAGE_SIZE} from '../../../../../../shared/constant/constant';
// import {IListDescription, IButtonDescription} from '../../../core/models/form-control';
import {Subscription} from 'rxjs/Subscription';
// import {CURRENT_LIST} from '../../../../../../shared/constant/storage-service-variables';
import {debounceTime} from 'rxjs/operators';
import {Subject} from 'rxjs';
// import {ThemePalette} from '@angular/material/core';
// import {ThemePalette} from '@angular/material/core';
import { StorageService } from '../services/storage.service';
import { SearchParams } from '../address/request/search-params';
import { PAGE_SIZE } from '../address/constant/constant';
import { IListDescription } from '../address/models/form-control';
import { CURRENT_LIST } from '../address/constant/storage-service-variables';
Pager.Inject(PagerDropDown);

@Component({
  selector: 'ast-list',
  templateUrl: './list.component.html',
  styles: [
      `
      .e-checkbox-wrapper.e-info .e-frame.e-check,
      .e-checkbox-wrapper.e-info .e-checkbox:focus + .e-frame.e-check { /* csslint allow: adjoining-classes */
        background-color: #2c32e0;
      }
    `
  ]
})
export class ListComponent implements OnInit, OnDestroy {

  @ViewChild('grid', {static: false}) grid: GridComponent;
  @ViewChild('pager', {static: false}) pager: PagerComponent;

  @Input() name: string;
  @Input() scroll = false;
  @Input() slideBar = false;
  @Input() slideBarCurrentValue = false;
  // slideBarColor: ThemePalette = 'primary';
  filteredOptions: any[];
  @HostBinding('class') classes = 'animated fadeIn';
  data: any[];
  pageSettings: PageSettingsModel = {};
  filterSettings: FilterSettingsModel;
  contextMenuItems: ContextMenuItem[];
  locale: string;
  params = new SearchParams();
  searchText: FormControl = new FormControl();
  pageNum: number;
  currentOffset: number;
  totalCount = 0;
  apiSupportsPagination = false;
  searchResult: any[];
  searchTextDebouncer: Subject<string> = new Subject<string>();
  @Output() searchTextChange = new EventEmitter<any>();
  @Output() checkChanged = new EventEmitter<{ checked: boolean, index: number }>();
  @Output() valueChanged = new EventEmitter<{ field: string, value: any, index: number }>();
  @Output() slideBarValue = new EventEmitter<any>();
  valueChangeDebouncer = new Subject<{ field: string, value: any, index: number }>();

  private _subscriptions: Subscription[] = [];

  constructor(
              // private translate: TranslateService,
              private storageService: StorageService,
              private _detectorRef: ChangeDetectorRef
              ) {
  }

  private _description: IListDescription;
  private dropDownList: any[];

  get description(): IListDescription {
    return this._description;
  }

  @Input()
  set description(value: IListDescription) {
    if (value) {
      this._description = value;
      this._description.fields
        .forEach(field => {
          if (field.nameBn) {
            field.name = field.nameBn;
          }
        });
      // this.pageSettings.pageSize = PAGE_SIZE;
      this.pageSettings = {pageSizes: true, pageSize: PAGE_SIZE, currentPage: 1};
      if (this.pager) {
        this.pager.currentPage = this.pageSettings.currentPage;
      }
      this.getList(0, this.pageSettings.pageSize);
    } else {
      console.error('List Description Cannot be null');
    }
  }

  @Input()
  set dropDownData(data: any[]) {
    if (data) {
      this.dropDownList = data;
      // this.getList(0, PAGE_SIZE);
    } else {
      console.error('List Data Cannot be null');
    }
  }


  ngOnInit() {
    this.valueChangeDebouncer
      .pipe(debounceTime(300))
      .subscribe(data => this.valueChanged.emit(data));
    this.searchTextDebouncer
      .pipe(debounceTime(100))
      .subscribe(text => this.searchTextChange.emit(text));

    // if (this._description) {
    //   this._description.fields
    //     .forEach(field => {
    //       if (field.nameBn) {
    //         field.name = field.nameBn;
    //       }
    //     });
    //   this.description = this._description;
    //   this.pageSettings.pageSize = PAGE_SIZE;
    //   this.getList(0, this.pageSettings.pageSize);
    // }
  }

  getList(page: number, size: number, searchText?: string) {
    const subscription = this._description.dataLoader(page, size, searchText)
      .subscribe(data => {
        if (data.data) {
          this.data = data.data;
          this.totalCount = data.count;
          this.apiSupportsPagination = true;
        } else {
          this.data = data;
          this.totalCount = data.length;
          this.apiSupportsPagination = false;
        }
        this._detectorRef.detectChanges();
        if (this.grid) {
          this.grid.autoFitColumns();
        }
        // this.dataTableIntl();
        // this.setPagination();
      }, error => console.log(error));
    this._subscriptions.push(subscription);
  }

  populateSearchWord(searchText: string) {
    this.params.searchText = searchText;
    // this.filterOptions();
    // this.getList();
  }

  // Start dataTable related function
  pageChange(args) {
    // console.log(args);
    if (args.currentPage) {
      this.pageSettings.currentPage = args.currentPage;
      // this.params.offset = (args.currentPage - 1) * this.pageSettings.pageSize;
      // this.params.limit = this.pageSettings.pageSize;
      this.getList(this.pageSettings.currentPage - 1, this.pageSettings.pageSize);
    }
  }

  /*pageCustomChange(currentPage: number, pageSize: number) {
    console.log(currentPage, pageSize);
    // if (args.currentPage) {
      this.pageSettings.currentPage = args.currentPage;
      // this.params.offset = (args.currentPage - 1) * this.pageSettings.pageSize;
      // this.params.limit = this.pageSettings.pageSize;
      this.getList(this.pageSettings.currentPage - 1, this.pageSettings.pageSize);
    // }
  }*/

  dropDownChanged(args) {
    this.pageSettings.pageSize = args.pageSize;
    this.pageSettings.currentPage = 1;
    this.pager.currentPage = 1;
    // this.params.offset = (args.currentPage - 1) * this.pageSettings.pageSize;
    // this.params.limit = this.pageSettings.pageSize;
    this.getList(0, this.pageSettings.pageSize);
  }

  setPagination() {
    this.pageNum = Number(this.storageService.read('PAGE_NUMBER'));
    if (this.pageNum === 0) {
      this.currentOffset = Number((this.pageSettings.currentPage - 1) * this.pageSettings.pageSize);
    } else {
      this.currentOffset = (Number(this.storageService.read('PAGE_NUMBER')) * Number(this.pageSettings.pageSize)) - Number(this.pageSettings.pageSize);
      this.pageSettings.currentPage = Number(this.storageService.read('PAGE_NUMBER'));
    }
    this.params.offset = this.currentOffset;
    this.params.limit = Number(this.pageSettings.pageSize);
    // console.log(this.pageSettings.currentPage);
  }

  // dataTableIntl() {
  //   setCulture('bn-BD');
  //   L10n.load(GridBnIntl);
  //   if (this.grid) {
  //     if (this.apiSupportsPagination) {
  //       this.grid.allowPaging = false;
  //     } else if (this.description.noPagination)  {
  //       this.grid.allowPaging = false;
  //     } else if (!this.description.hasSelection)  {
  //       this.grid.allowPaging = true;
  //     } else {
  //       this.grid.allowPaging = false;
  //     }
  //   }
  //   this.filterSettings = {type: 'CheckBox'};
  //   // this.contextMenuItems = ['Copy', 'Edit', 'Delete', 'PdfExport', 'ExcelExport', 'CsvExport'];
  //   this.contextMenuItems = ['Copy'];
  //   // const subscription = this.translate.onLangChange
  //   //   .subscribe(s => this.locale = s.lang === 'en' ? 'en-US' : 'bn-BD');
  //   // this._subscriptions.push(subscription);
  // }

  ngOnDestroy(): void {
    this._subscriptions.forEach(s => s.unsubscribe());
  }

  filterOptions() {
    this.filteredOptions = [];
    this.searchResult = [];
    let currentList: any[];
    currentList = this.storageService.read(CURRENT_LIST);
    for (let i = 0; i < currentList.length; i++) {
      let brand = '';
      if (this.description.searchFields) {
        this.description.searchFields
          .forEach(field => {
            brand = brand + currentList[i][field.field] + ', ';
          });
        if (brand.toLowerCase().indexOf(this.params.searchText.toLowerCase()) !== -1) {
          this.filteredOptions.push(currentList[i][this.description.searchFields[0].field] + ', ' + currentList[i][this.description.searchFields[1].field] + ', ' + currentList[i][this.description.searchFields[2].field]);
          this.searchResult.push(currentList[i]);
        }
      }
    }
  }

  loadSearchResult(searchText: string) {
    this.searchTextDebouncer.next(searchText);
  }

  onCheckedChange(isChecked: any, idx: number) {
    this.data[idx].checked = isChecked;
    this.checkChanged.emit({checked: isChecked, index: idx});
  }

  onValueChange(value: any, field: string, idx: number, type: 'number' | 'text') {
    this.data[idx][field] = type === 'number' ? parseInt(value, 10) : value;
    this.valueChangeDebouncer.next({field: field, value: value, index: idx});
  }

  refresh() {
    if (this.grid) {
      this.grid.refresh();
    }
  }

  announceClick(listener: (data?: any) => any, index: number) {
    const datum = this.data[index];
    datum.index = index;
    listener(datum);
  }

  onSlideBarChange($event) {
    this.slideBarValue.emit($event);
    this.getList(0, this.pageSettings.pageSize);
  }

  getSerialNo(index: number): number {
    if (this.apiSupportsPagination) {
      return (index + 1) + ((this.pageSettings.currentPage - 1) * this.pageSettings.pageSize);
    } else {
      if (this.grid.pageSettings.pageSize) {
        return (index + 1) + ((this.grid.pageSettings.currentPage - 1) * this.grid.pageSettings.pageSize);
      } else {
        return (index + 1) + ((this.grid.pageSettings.currentPage - 1));
      }
    }
  }

  getDataIndex(index: number): number {
    return this.apiSupportsPagination ? index : index + ((this.grid.pageSettings.currentPage - 1) * this.grid.pageSettings.pageSize);
  }
}
