export const GET_TODOS = 'GET_TODOS';

export const reducer = (state: any, action: any) => {
  const { payload, type } = action;

  switch (type) {
    case GET_TODOS:
      return {
        ...state,
        todos: payload,
      };
    default:
      return state;
  }
};