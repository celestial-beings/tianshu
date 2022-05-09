interface IBaseProps {
  order?: number | string;
  span?: number | string;
  offset?: number | string;
  push?: number | string;
  pull?: number | string;
}

export default interface IProps extends IBaseProps {
  xs?: number | string | IBaseProps;
  sm?: number | string | IBaseProps;
  md?: number | string | IBaseProps;
  lg?: number | string | IBaseProps;
  xl?: number | string | IBaseProps;
  xxl?: number | string | IBaseProps;
  xxxl?: number | string | IBaseProps;
}
