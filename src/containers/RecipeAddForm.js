import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { addRecipe } from '../actions/actionCreators';
import '../style/RecipeAddForm.css';

class RecipeAddForm extends Component{

  constructor(props){
    super(props);
    this.state = {
      title: '',
      instructions: '',
      ingredients: '',
      img: ''
    };
  }


  handleSubmit = (e) => {

    e.preventDefault();

    const {title} = this.state;
    const {instructions} = this.state;
    const {ingredients} = this.state;
    const {img} = this.state;

    this.props.onSave({title, instructions, ingredients, img})

  }

  render(){
    const {title, instructions, ingredients, img} = this.state;
    const {onClose} = this.props;

    return(
    <div className='recipe-form-container'>
     <form className='recipe-form' onSubmit={this.handleSubmit}>
      <button
           type='button'
           className='close-button'
           onClick={onClose}
         >
           X
         </button>
      <div className='recipe-form-line'>
        <label htmlFor='title'>Title</label>
          <input
               id='title'
               size={44}
               name='title'
               type='text'
               placeholder='Title'
               value={title}
               onChange = {event => this.setState({title: event.target.value})}
          />
        </div>
        <label htmlFor='ingredients'>Ingredients</label>
        <textarea
            rows='5'
            cols='49'
            name='ingredients'
            id='ingredients'
            type='text'
            value={ingredients}
            placeholder='Separate multiple ingredients by a comma'
            onChange = {event => this.setState({ingredients: event.target.value})}
        />
          <label htmlFor='instructions'>Instructions</label>
          <textarea
              rows='8'
              cols='49'
              type='text'
              name='instructions'
              id='instructions'
              value={instructions}
              placeholder='Instructions'
              onChange = {event => this.setState({instructions: event.target.value})}
          />
        <div className='recipe-form-line'>
          <label htmlFor='img'>Image Url</label>
           <input
              id='img'
              type='text'
              size={39}
              placeholder='Image'
              name='img'
              value={img}
              onChange = {event => this.setState({img: event.target.value})}
          />
          </div>
          <div className=''>
            <button type='submit' className='buttons'> Save </button>
          </div>
       </form>
       </div>
    );
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({addRecipe}, dispatch)
}

export default connect(null,mapDispatchToProps)(RecipeAddForm);
