import { ComputedRef, StyleValue } from 'vue'
import { Classes } from 'src/types/global'

export type { Classes, StyleValue }

interface IProps {
  colSpan?: number | string | [number | string, number | string];
  rowSpan?: number | string | [number | string, number | string];
  justify?: 'start' | 'end' | 'center' | 'stretch';
  align?: 'start' | 'end' | 'center' | 'stretch';
}

export type UseClassesComputed = (classNamePrefix: string, props: IProps) => ComputedRef<Classes>;

export type UseStylesComputed = (props: IProps) => ComputedRef<StyleValue>;
