import { ListsAction, ListState, Lists, ADD_LIST, GET_LISTS } from '../types';

const initialState: ListState = {
  lists: {},
};

// Helper functions
const getListsFromLS = (): Lists => {
  if (localStorage.getItem('task_list')) {
    return JSON.parse(localStorage.getItem('task_list') || '{}');
  }

  return {};
};

const saveListsToLS = (lists: Lists) => {
  localStorage.setItem('task_list', JSON.stringify(lists));
};

export default (state = initialState, action: ListsAction): ListState => {
  const listsFromLS = getListsFromLS();

  switch (action.type) {
    case ADD_LIST:
      const clonedListsFromLS = { ...listsFromLS };
      clonedListsFromLS[action.payload.id] = action.payload;
      saveListsToLS(clonedListsFromLS);
      return {
        ...state,
        lists: clonedListsFromLS,
      };

    case GET_LISTS:
      return {
        ...state,
        lists: listsFromLS,
      };

    default:
      return state;
  }
};
