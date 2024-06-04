/* eslint-disable no-console */
import { Middleware } from 'redux';
import { TRootState } from './reducers';

export const logger: Middleware<{}, TRootState> = store => next => action => {
  console.info('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};
 