import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import RecipeList from '../components/RecipeList';
import RecipeAddForm from './RecipeAddForm';


class RecipeApp extends Component {
  constructor(props){
  super(props);
  this.state = {
    recipes: [
      { id: 0,
        title:'Garlic Lemon Salmon',
        ingredients: ['Water', 'Lemon', 'Butter', 'Garlic'],
        instructions:'Place salmon fillets over of butter and garlic. pour the lomon and bake it',
        img: 'salmon.jpg'
      },
      {
        id: 1,
        title:'Breakfast Smoothie',
        ingredients:['Milk','Blueberries', 'Strawberries', 'Banana', 'Coconut Oil'],
        instructions: 'Combine all the Smoothie Ingredients. Blend until all ingredients are running smoothly through the machine. Add Ice & blend again on high.',
        img: 'smoothie.jpg'
       },
      {
        id: 2,
        title:'Fry Rice Recipe',
        ingredients:['Onion', 'Oil', 'Egg', 'Soy sauce', 'Peas', 'Rice', 'Green onions'],
        instructions: 'Heat 1 tbsp oil in wok; add chopped onions. Mix egg and 3 drops of oil. Add selected meat, along with peas and cooked onion; Stir-fry. Add rice and green onions.',
        img: 'rice.jpg'
      }
    ],
    nextRecipeId: 3,
    showAddForm: false,
    showEditForm: false
  };
}

handleSave = (recipe) => {

  const {title, ingredients, instructions, img} = recipe;

  const newRecipeIngredients = ingredients.split(',');

  const newRecipe = {
                 id: this.state.nextRecipeId,
                 title: title,
                 ingredients: newRecipeIngredients,
                 instructions: instructions,
                 img:img
               };

        this.setState({
          nextRecipeId: this.state.nextRecipeId + 1,
          recipes: [...this.state.recipes, newRecipe],
          showAddForm: false
        });
}


onDelete = (id) => {
  const recipes = this.state.recipes.filter(recipe => recipe.id !== id);
  this.setState({recipes});
}

render() {
    return (
      <div>
        <Navbar onNewRecipe={() => this.setState({showAddForm: true})} />

        {this.state.showAddForm &&
         <RecipeAddForm
           onSave={this.handleSave}
           onClose={() => this.setState({showAddForm: false})}
         />
        }

        <RecipeList
           onDelete={this.onDelete}
           recipes={this.state.recipes}
        />
      </div>
    );
  }
}

function mapStateToProps(reduxState){
  //debugger; //this one is second
   return{
     recipes: reduxState.recipes
   };
}

export default connect(mapStateToProps)(RecipeApp);
