
import { Ref, ComputedRef, StyleValue } from 'src/types/global'

/**
 * row
 */
type BaseType = number | string | [number | string, number | string];

interface IGutter {
  xs?: BaseType;
  sm?: BaseType;
  md?: BaseType;
  lg?: BaseType;
  xl?: BaseType;
  xxl?: BaseType;
  xxxl?: BaseType;
}

export interface IRowProps {
  gutter?: BaseType | IGutter;
}

/**
 * col
 */
interface IBaseProps {
  order?: number | string;
  span?: number | string;
  offset?: number | string;
  push?: number | string;
  pull?: number | string;
}

export interface IColProps extends IBaseProps {
  xs?: number | string | IBaseProps;
  sm?: number | string | IBaseProps;
  md?: number | string | IBaseProps;
  lg?: number | string | IBaseProps;
  xl?: number | string | IBaseProps;
  xxl?: number | string | IBaseProps;
  xxxl?: number | string | IBaseProps;
}

export type UseStylesComputed = (size: Ref<string> | null, offset: ComputedRef<[number, number]>, props: IColProps) => ComputedRef<StyleValue>;
