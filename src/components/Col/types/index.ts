
import { Ref, ComputedRef, StyleValue } from 'src/types/global'

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

export type UseStylesComputed = (size: Ref<string> | null, offset: ComputedRef<[number, number]>, props: IProps) => ComputedRef<StyleValue>;
