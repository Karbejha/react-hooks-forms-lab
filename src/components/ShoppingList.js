import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchValue, setsearchValue] = useState("");
  const[arrayToDisplay , setArrayToDisplay] =useState(items);


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
   
const itemsToDisplay = items.filter((item) => {
  if (event.target.value === "All") return true;
  return item.category === event.target.value;
});
    setArrayToDisplay(itemsToDisplay);
}

function onSearchChange (event) {
  if(event.target.value != ""){
    setsearchValue(event.target.value);
  }else{
    setsearchValue("");
  }
  const itemsToDisplay = items.filter((item) => {
    if (event.target.value === "") return true;
    return item.name.includes(event.target.value);
  });
  setArrayToDisplay(itemsToDisplay);

}

  function onItemFormSubmit(formData){
    addElement(formData)
  }
  function addElement(element) {
    setArrayToDisplay([...arrayToDisplay, element]);
  }
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange ={onSearchChange} search={searchValue.toString()} selectedCategory={selectedCategory}/>
      <ul className="Items">
        {arrayToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;