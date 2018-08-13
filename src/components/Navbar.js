import React from 'react';
import '../style/Navbar.css'


const Navbar = (props) => {
  return(
    <header>
     <h3><a>Recipe App</a></h3>
      <nav>
       <li><a onClick={props.onNewRecipe}>Add New Recipe</a></li>
      </nav>
    </header>
  )
}


export default Navbar;
