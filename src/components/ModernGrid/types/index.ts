export interface IGridProps {
  cols?: number | string;
  rows?: number | string;
  colGap?: number | string;
  rowGap?: number | string;
  flow?: 'row' | 'column' | 'row-dense' | 'column-dense';
  justify?: 'start' | 'end' | 'center' | 'stretch';
}

export interface IGridItemProps {
  colSpan?: number | string | [number | string, number | string];
  rowSpan?: number | string | [number | string, number | string];
  justify?: 'start' | 'end' | 'center' | 'stretch';
  align?: 'start' | 'end' | 'center' | 'stretch';
}
