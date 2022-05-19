import { ComputedRef, StyleValue } from 'src/types/global'

export interface IProps {
  dashed?: boolean;
  text?: string;
  placement?: 'left' | 'right' | 'center';
  vertical?: boolean;
  offset?: string;
}

export type UseStylesComputed = (hasText: ComputedRef<boolean>, props: IProps) => ComputedRef<StyleValue>;
