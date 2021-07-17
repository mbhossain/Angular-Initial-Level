import {IOption} from './option';
import {Observable} from 'rxjs/Observable';

export type ActionableField = IFieldDescription & { required?: boolean, type?: 'number' | 'text' | 'date' | 'dropdownedit' };

export interface IFieldDescription {
  name: string;
  field: string;
  nameBn?: string;
  textAlign?: 'left' | 'right' | 'center' | 'justify'; // Defaults to 'left'
  dataLoader?: (selections: Record<IFieldDescription['field'], string>) => Observable<IOption[]>;
}

export interface IButtonDescription {
  color?: 'primary' | 'accent' | 'warn' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'; // Defaults to 'primary'
  text?: string;
  icon: string; // MAT-ICON !!NOT!! FAB-ICON
  type?: string;  // Mat or fa fa
  listener: (data?: any) => any;
  disabled?: boolean;
  isHidden?: (data?: any) => boolean;
}

export interface IListDescription {
  fields: IFieldDescription[];
  searchFields?: IFieldDescription[];
  dataLoader: (page: number, size: number, searchText?: string) => Observable<any>;
  topButton?: IButtonDescription;
  buttons?: IButtonDescription[];
  removeSurrounding?: boolean;
  actionableFields?: ActionableField[];
  hasSelection?: boolean;
  noPagination?: boolean;
  hasSearch?: boolean;
  backButton?: IButtonDescription;
  submitButton?: IButtonDescription;
  hideEmptyList?: boolean;
}

interface IBasicFormControl extends IFieldDescription {
  required: boolean;
  readonly?: boolean;
  customError?: string;
  customErrorText?: string;
  colspan?: 'col-lg-4' | 'col-lg-8' | 'col-lg-12';
}

export interface IMultiSelectFormControl extends IBasicFormControl {
  type: 'multi-select' | 'multi-select-search';
  dataLoader: () => Observable<IOption[]>;
}

export interface ITextFormControl extends IBasicFormControl {
  type: 'text';
  dataLoader?: () => Observable<IOption[]>;
  onChange?: (value: any) => void;
}

export interface IDateFormControl extends IBasicFormControl {
  maxDate?: Date;
  minDate?: Date;
  type: 'date';
}

export interface INumberFormControl extends IBasicFormControl {
  type: 'number';
  min?: number;
  max?: number;
  onChange?: (value: any) => void;
}

export interface IBooleanFormControl extends IBasicFormControl {
  type: 'boolean';
  color?: 'primary' | 'accent' | 'warn';
  defaultValue?: boolean;
  options?: { 'trueValue': string, 'falseValue': string };
  onToggle?: (value: any) => void;
}

export interface ISelectFormControl extends IBasicFormControl {
  type: 'select' | 'select-search';
  dataLoader: () => Observable<IOption[]>;
  onSelect?: (value: any) => void;
}

export interface ISelectSearchFormControl extends ISelectFormControl {
  type: 'select-search';
}

export interface ISliderFormControl extends IBasicFormControl {
  type: 'slider';
}

export interface IDependantSelectFormControl extends IBasicFormControl {
  type: 'dependant-select' | 'dependant-select-search';
  parents: IFieldDescription['field'][];
  dataLoader: (selections: Record<IFieldDescription['field'], string>) => Observable<IOption[]>;
  onSelect?: (value: string) => void;
}

export interface IDependantSelectSearchFormControl extends IDependantSelectFormControl {
  type: 'dependant-select-search';
}

export type IFormControl =
  ITextFormControl
  | IDateFormControl
  | INumberFormControl
  | IBooleanFormControl
  | ISelectFormControl
  | ISelectSearchFormControl
  | IDependantSelectFormControl
  | IDependantSelectSearchFormControl
  | ISliderFormControl
  | IMultiSelectFormControl;

