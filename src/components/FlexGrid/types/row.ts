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

export default interface IProps {
  gutter?: BaseType | IGutter;
}
