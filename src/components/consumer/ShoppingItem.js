import React from "react";

const ShoppingItem = props => {
  const { item } = props;

  item.produce_category =
    item.produce_category.charAt(0).toUpperCase() +
    item.produce_category.substr(1);
  item.produce_name =
    item.produce_name.charAt(0).toUpperCase() + item.produce_name.substr(1);

  return (
    <div className="item-container">
    <img src='https://images.unsplash.com/photo-1553285906-9a0604da169f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=842&q=80' alt = 'farm_logo' className = 'logo'/>
    <h3 className = 'item-name'>{item.produce_name}</h3>
      <div className = 'item-data'>
        <p>${item.unit_price}/lb</p>
        <p>Sold By - {item.seller}</p>
        <p>Current Stock - {item.quantity}lbs</p>
      </div>
    </div>
  );
};

export default ShoppingItem;
