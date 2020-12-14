export interface Item {
  id: number;
  text: string;
  complete: boolean;
}

export type Props = {
  item: Item;
  toggleDone: () => void;
};

export type PropsList = {
  list: Item[];
  toggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export type PropsForm = {
  handleSubmit: (todo: string) => void;
};
