import { Component, OnInit } from '@angular/core';
import { DataShowStateService } from '../../services/data-show-state.service';

@Component({
  selector: 'app-data-show',
  templateUrl: './data-show.component.html'
})
export class DataShowComponent implements OnInit {

  data: any[][];
  constructor(private dataShowState: DataShowStateService) { }

  ngOnInit(): void {
    this.dataShowState.getData().subscribe(
      res => {
        console.log(res);
        this.data = res;
      },
      err => console.log(err)
    );
  }
}
