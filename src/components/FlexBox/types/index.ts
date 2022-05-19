export interface IFlexProps {
  justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  wrap?: boolean | undefined;
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}

export interface IFlexItemProps {
  order?: number | string;
  grow?: boolean | number | string | undefined;
  shrink?: boolean | number | string | undefined;
  align?: 'auto' | 'start' | 'end' | 'center' | 'baseline' | 'stretch';
}
