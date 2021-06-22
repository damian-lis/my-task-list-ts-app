export const ADD_LIST = 'ADD_LIST';

export interface Task {
  name: string;
  id: string;
  completed: boolean;
}

export interface List {
  name: string;
  id: string;
  tasks: Task[];
}

export interface Lists {
  [id: string]: List;
}

//Actions

interface AddListAction {
  type: typeof ADD_LIST;
  payload: List;
}

export type ListsAction = AddListAction;

export interface ListState {
  lists: Lists;
}
