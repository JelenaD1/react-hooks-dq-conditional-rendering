import React, { useState } from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

function MainBox() {

  const [selectedPage, setSelectedPage] = useState("Profile")

  const detailsToDisplay = {
    Profile: <Profile /> ,
    Photos: <Photos /> ,
    Cocktails: <Cocktails /> ,
    Pokemon: <Pokemon /> ,
  }

  const handleClick = (page) => {
    setSelectedPage(page)
  }
  /*
    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. 
    - Which component should have state? 
    - Which component should have methods to control state? 
    - Where should these methods be called?
  */

 

  return (
    <div>
      <MenuBar selectedPage={selectedPage}
      onButtonClick={handleClick}/>
      {detailsToDisplay[selectedPage]}
    </div>
  );
}

export default MainBox;
