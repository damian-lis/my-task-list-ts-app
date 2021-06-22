export const ADD_LIST = 'ADD_LIST';
export const GET_LISTS = 'GET_LISTS';

export const SET_NOTIFICATION = 'SET_NOTIFICATION';

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

interface GetListsAction {
  type: typeof GET_LISTS;
}

interface SetNotificationAction {
  type: typeof SET_NOTIFICATION;
  payload: {
    msg: string;
    type: string;
  };
}

export type ListsAction = AddListAction | GetListsAction;

export type NotificationAction = SetNotificationAction;

export interface ListState {
  lists: Lists;
}

export interface NotificationState {
  message: string;
  type: string;
}
