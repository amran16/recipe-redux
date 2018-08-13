export const RECIPE_ADD = 'RECIPE_ADD';
export const RECIPE_DELETE = 'RECIPE_DELETE';
export const RECIPE_EDIT = 'RECIPE_EDIT';

export function addRecipe(recipe){
  return{
    type: RECIPE_ADD,
    recipe
  }
}

export function deleteRecipe(recipId){
  return{
    type: RECIPE_DELETE,
    recipId
  }
}

export function editRecipe(recipId){
  return{
    type: RECIPE_EDIT,
    recipId
  }
}
