import React , {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const [formData, setFormData] = useState({
    id: uuid(),
    name: "",
    category: ""
    });

    function handleChange(event) {
      // name is the KEY in of the formData object we're trying to update
      const name = event.target.name;
      const value = event.target.value;

      setFormData({
        ...formData,
        id: uuid(),
        [name]: value,
      });

    }
    const handleSubmit = (event) => {
      event.preventDefault();
      props.onItemFormSubmit(formData); 
      setFormData({
        ...formData,
        id: "",
        ['name']: "",
        ['category']: ""
      });

    };
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} value={formData.name}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange} value={formData.category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;