import { List, ListsAction, ADD_LIST } from 'store/types';

export const addList = (list: List): ListsAction => {
  return {
    type: ADD_LIST,
    payload: list,
  };
};
