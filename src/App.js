import React from "react";

const categories = [
  {
    id : 1,
    title:"Hate",
  },
  {
    id : 2,
    title:"Jackets",
  },
  {
    id : 3,
    title:"Sneakers",
  },
  {
    id : 4,
    title:"Women",
  },
  {
    id : 5,
    title:"Men",
  }
]

const App = () => {
  return (
    <div className="categorys-container">
      {categories.map(({title})=>(
        <div className="category-container">
        {/*<img />*/}
        <div className="category-body-container">
        <h1>{title}</h1>
        <p>Shop Now</p>
        </div>
      </div>
      ))}
    </div>   
  );
};

export default App;
