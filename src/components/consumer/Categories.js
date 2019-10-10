import React from 'react'
import Category from './Category'
import { connect } from 'react-redux'

const Categories = props => {

    const { categories } = props

    return (
        <div className = 'categories-container'>
            <h2 className = 'categories-header'>Shop By Category</h2>
            <div className = 'categories'>
            {categories.map( category => {
                return <Category key = {category.id} category = {category}/>
            })}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        categories: state.shoppingReducer.categories
    }
}

export default connect(mapStateToProps, {})(Categories);