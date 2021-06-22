import { List, ListsAction, ADD_LIST, GET_LISTS } from 'store/types';

export const addList = (list: List): ListsAction => {
  return {
    type: ADD_LIST,
    payload: list,
  };
};

export const getLists = (): ListsAction => {
  return {
    type: GET_LISTS,
  };
};
