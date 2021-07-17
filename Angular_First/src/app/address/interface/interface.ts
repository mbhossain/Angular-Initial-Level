import { Observable } from "rxjs";

export interface IOption {
    name: string;
    nameEn?: string;
    nameBn?: string;
    value?: any;
  }

export interface IFieldDescription {
    name: string;
    field: string;
    nameBn?: string;
    textAlign?: 'left' | 'right' | 'center' | 'justify'; // Defaults to 'left'
    dataLoader?: (selections: Record<IFieldDescription['field'], string>) => Observable<IOption[]>;
  }

export interface IListDescription{
    fields: IFieldDescription[];
    dataLoader: (page: number, size: number, searchText?: string) => Observable<any>;
}