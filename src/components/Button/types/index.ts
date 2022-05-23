export interface IProps {
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
