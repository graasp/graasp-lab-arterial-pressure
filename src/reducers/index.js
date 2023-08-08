import { combineReducers } from 'redux';
import layoutReducer from './layout';
import appInstanceReducer from './appInstance';
import contextReducer from './context';
import userReducer from './users';
import innervationReducer from './innervation';
import sectionReducer from './section';
import stimulationReducer from './stimulation';
import deleteReducer from './delete';

export default combineReducers({
  layout: layoutReducer,
  appInstance: appInstanceReducer,
  context: contextReducer,
  user: userReducer,
  normalInnervation: innervationReducer,
  sections: sectionReducer,
  stimulations: stimulationReducer,
  delete: deleteReducer,
});
