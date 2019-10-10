import React from 'react'
import ShoppingItem from './ShoppingItem'

import { connect } from 'react-redux'

const ShoppingItems = props => {

    const { items } = props

    return (
        <div className = 'items-container'>
            <h2 className = 'items-header'>Items Near You</h2>
            <div className = 'items'>
                {items.map(item => {
                    return <ShoppingItem key = {item.produce_id} item = {item}/>
                })}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        items: state.shoppingReducer.items
    }
}

export default connect(mapStateToProps, {})(ShoppingItems);