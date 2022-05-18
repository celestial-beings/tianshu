export interface IOptions {
  mode?: 'light' | 'dark';
  backgroundColor?: string;
}

export type Generate = (color?: string, options?: IOptions) => string[];

export type Create = (color?: string, options?: IOptions) => void;

export type SetColorVar = (prop: string, value: string) => void;

export type InitSubColorVars = (options?: IOptions) => void;
