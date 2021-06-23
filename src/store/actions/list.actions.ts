import {
  List,
  ListsAction,
  ADD_LIST,
  GET_LISTS,
  GET_LIST_BY_ID,
  SET_LIST_ID_TO_DELETE,
  DELETE_LIST,
} from 'store/types';

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

export const getListById = (id: string): ListsAction => {
  return {
    type: GET_LIST_BY_ID,
    payload: id,
  };
};

export const setListIdToDelete = (id: string): ListsAction => {
  return {
    type: SET_LIST_ID_TO_DELETE,
    payload: id,
  };
};

export const deleteList = (id: string): ListsAction => {
  return {
    type: DELETE_LIST,
    payload: id,
  };
};
