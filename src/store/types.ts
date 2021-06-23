export const ADD_LIST = 'ADD_LIST';
export const GET_LISTS = 'GET_LISTS';
export const GET_LIST_BY_ID = 'GET_LIST_BY_ID';
export const DELETE_LIST = 'DELETE_LIST';
export const SET_LIST_ID_TO_DELETE = 'SET_LISTID_TO_DELETE';

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

interface GetListByIdAction {
  type: typeof GET_LIST_BY_ID;
  payload: string;
}

interface DeleteListAction {
  type: typeof DELETE_LIST;
  payload: string;
}

interface SetListIdToDeleteAction {
  type: typeof SET_LIST_ID_TO_DELETE;
  payload: string;
}

interface SetNotificationAction {
  type: typeof SET_NOTIFICATION;
  payload: {
    msg: string;
    type: string;
  };
}

export type ListsAction =
  | AddListAction
  | GetListsAction
  | GetListByIdAction
  | DeleteListAction
  | SetListIdToDeleteAction;

export type NotificationAction = SetNotificationAction;

export interface ListState {
  lists: Lists;
  listIdToDelete: string;
  listById: List | null;
  selectedList: List | null;
}

export interface NotificationState {
  message: string;
  type: string;
}
