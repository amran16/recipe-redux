import React, {Component} from 'react';
import '../style/RecipeListItem.css';


class RecipeListItem extends Component{

  render(){
    //const {title} = this.props.title;  //this is the same as the line below, destructuring
    const {title, img, instructions, id, onDelete} = this.props;
    const ingredients = this.props.ingredients.map((ingredient, index) => (
      <li key={index}>{ingredient}</li>
    ));
    return(
      <div className='recipe-card'>
      <div className='recipe-card-img'>
       <img src={img} alt={title} />
      </div>
      <div className='recipe-card-content'>
       <h2 className='recipe-title'> {title}</h2>
       <h4>Ingredients: </h4>
       <ul>
        {ingredients}
       </ul>
       <h4>Instructions: </h4>
       <p>{instructions}</p>
        <button className='button' type='button' onClick={() => onDelete(id)}> Delete Recipe</button>
       </div>
      </div>
    )
  }
}

export default RecipeListItem;
