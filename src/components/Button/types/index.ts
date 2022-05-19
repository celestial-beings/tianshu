export interface IButtonProps {
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

export interface IButtonGroupProps {
  size?: 'small' | 'normal' | 'large';
  vertical?: boolean;
  round?: boolean;
}
