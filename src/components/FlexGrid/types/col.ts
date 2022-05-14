import { ComputedRef, Ref, StyleValue } from 'vue'
import { Classes } from 'src/types/global'

export type { Classes, StyleValue }

interface IBaseProps {
  order?: number | string;
  span?: number | string;
  offset?: number | string;
  push?: number | string;
  pull?: number | string;
}

export interface IProps extends IBaseProps {
  xs?: number | string | IBaseProps;
  sm?: number | string | IBaseProps;
  md?: number | string | IBaseProps;
  lg?: number | string | IBaseProps;
  xl?: number | string | IBaseProps;
  xxl?: number | string | IBaseProps;
  xxxl?: number | string | IBaseProps;
}

export type UseClassesComputed = (classNamePrefix: string, props: IProps) => ComputedRef<Classes>;

export type UseStylesComputed = (size: Ref<string> | null, offset: ComputedRef<[number, number]>, props: IProps) => ComputedRef<StyleValue>;
