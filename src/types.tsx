export type element = JSX.Element;
export type Event = React.ChangeEvent<HTMLInputElement>;

export interface personProp {
  name: string;
  age: number;
}

export interface Item {
  id: number;
  text: string;
  done: boolean;
}

export interface Filter {
  remaining: boolean;
  completed: boolean;
}
