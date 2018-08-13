import { combineReducers} from 'redux';
import recipeRecuder from './reducer_recipe';

const rootReducer = combineReducers({
  recipes: recipeRecuder
});

export default rootReducer;
