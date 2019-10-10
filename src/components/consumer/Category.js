import React from "react";

const Category = props => {
  const { category } = props;

  let imgSrc;

  switch (category.name.toLowerCase()) {
    case "fruits":
      imgSrc =
        "https://images.unsplash.com/photo-1425934398893-310a009a77f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80";
      break;
    case "vegetables":
      imgSrc =
        "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";
      break;
    case "grains":
      imgSrc =
        "https://images.unsplash.com/photo-1523790971009-e9cd9014cfdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80";
      break;
    case "meats":
      imgSrc =
        "https://images.unsplash.com/photo-1486172290186-a633e90efd68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";
      break;
    case "dairy":
      imgSrc =
        "https://images.unsplash.com/photo-1552767059-ce182ead6c1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";
      break;
    default:
      imgSrc = "";
  }

  //TODO formatting category name - update backend to handle this
   
  category.name = category.name.charAt(0).toUpperCase() + category.name.substr(1)

  return (
    <div className="category-container">
    <img src={imgSrc} alt="category_logo" className="logo" />
    <p className="category-name">{category.name}</p>
    </div>
  );
};

export default Category;
