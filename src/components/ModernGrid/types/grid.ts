import { ComputedRef, StyleValue } from 'vue'
import { Classes } from 'src/types/global'

export type { Classes, StyleValue }

interface IProps {
  cols?: number | string;
  rows?: number | string;
  colGap?: number | string;
  rowGap?: number | string;
  flow?: 'row' | 'column' | 'row-dense' | 'column-dense';
  justify?: 'start' | 'end' | 'center' | 'stretch';
}

export type UseClassesComputed = (classNamePrefix: string, props: IProps) => ComputedRef<Classes>;

export type UseStylesComputed = (props: IProps) => ComputedRef<StyleValue>;
