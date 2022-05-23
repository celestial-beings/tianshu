export interface IProps {
  cols?: number | string;
  rows?: number | string;
  colGap?: number | string;
  rowGap?: number | string;
  flow?: 'row' | 'column' | 'row-dense' | 'column-dense';
  justify?: 'start' | 'end' | 'center' | 'stretch';
}
