import React from "react";

function MenuBar({onButtonClick, selectedPage}) {


  const buttonClick = (event) => {
    debugger
    if(event.target.className === "item") {
      console.log(event.target.className)
    return onButtonClick(event.target.id)
    }
    
  }
  

  return (
    <div className="ui four item menu">
      <span id="Profile" className= {selectedPage === "Profile" ? "item active" : "item"} onClick={buttonClick}>
        <i className="user large icon" />
      </span>

      <span id="Photos" className= {selectedPage === "Photos" ? "item active" : "item"}  onClick={buttonClick}>
        <i className="photo large icon" />
      </span>

      <span id="Cocktails" className= {selectedPage === "Cocktails" ? "item active" : "item"}  onClick={buttonClick}>
        <i className="cocktail large icon" />
      </span>

      <span id="Pokemon" className= {selectedPage === "Pokemon" ? "item active" : "item"}  onClick={buttonClick}>
        <i className=" themeisle large icon" />
      </span>
    </div>
  );
}

export default MenuBar;
