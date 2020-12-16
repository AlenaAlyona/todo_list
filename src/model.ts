export interface Item {
  id: number;
  text: string;
  complete: boolean;
}

export type Props = {
  item: Item;
  toggleDone: () => void;
  onDelete: () => void;
  onEdit: (editVal: string, id: number) => void;
};

export type PropsList = {
  list: Item[];
  toggle: (id: number) => void;
  handleDelete: (id: number) => void;
  handleEdit: (editVal: string, id: number) => void;
};

export type PropsForm = {
  handleSubmit: (todo: string) => void;
};
