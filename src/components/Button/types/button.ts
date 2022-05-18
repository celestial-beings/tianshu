import { ComputedRef, StyleValue } from 'vue'
import { Classes } from 'src/types/global'

export type { Classes, StyleValue }

interface IProps {
  long?: boolean;
  text?: boolean;
  disabled?: boolean;
  ghost?: boolean;
  loading?: boolean;
  autoFocus?: boolean;
  dashed?: boolean;
  icon?: string;
  shape?: 'normal' | 'circle' | 'round';
  size?: 'small' | 'normal' | 'large';
  type?: 'primary' | 'success' | 'warning' | 'error' | 'info' | 'normal';
  htmlType?: 'button' | 'submit' | 'reset';
}

export type UseClassesComputed = (classNamePrefix: string, props: IProps) => ComputedRef<Classes>;

export type UseStylesComputed = (props: IProps) => ComputedRef<StyleValue>;
