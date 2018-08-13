import { RECIPE_ADD, RECIPE_DELETE } from '../actions/actionCreators';
import defaultState from './defaultState'

export default function(state = defaultState, action){
  switch(action.type){
    case RECIPE_ADD:
     var newState = {...state};
     return [
       ...newState.recipes,
       {recipe: action.recipe, id: action.id}
     ];
     case RECIPE_DELETE:
     return [
       state.recipes.filter(recipe => recipe.id !== action.id)
     ]
     default:
      return state;
  }
}
