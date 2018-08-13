import React, {Component} from "react";
import RecipeListItem from '../components/RecipeListItem';
import '../style/RecipeList.css';

class RecipeList extends Component{

  render(){
    const {onDelete} = this.props;
    const recipes = this.props.recipes.map((recipe, index) => (
       <RecipeListItem
         key = {recipe.id}
         id={recipe.id}
         title={recipe.title}
         img={recipe.img}
         ingredients={recipe.ingredients}
         instructions={recipe.instructions}
         onDelete={onDelete}
      />
     ));

     return(
       <div className='recipe-list'>
         {recipes}
       </div>
     )
  }
}

export default RecipeList;
