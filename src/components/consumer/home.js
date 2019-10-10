import React, { useEffect } from 'react'
import Farms from './Farms'
import Categories from './Categories'
import ShoppingItems from './ShoppingItems'
import { connect } from 'react-redux'
import { getFarms, getUser, getCategories, getLocalItems } from '../../actions/consumer_actions/shopping'

const Home = props => {

    const { cityId } = props
    const { stateId } = props
    const { categories } = props
    const { farms } = props
    useEffect(() => {
        props.getUser(localStorage.getItem('ff_berries'))
        if(categories.length && farms.length){
            return;
        }else if(cityId & !categories.length && !farms.length){
            props.getFarms(cityId, stateId);
            props.getCategories();
            props.getLocalItems(cityId)
        }
    },[cityId])

    return (
        <div>
            <Farms />
            <Categories />
            <ShoppingItems />
        </div>
    )
}
const mapStateToProps = state => {
    return {
        cityId: state.shoppingReducer.user.city_id,
        stateId: state.shoppingReducer.user.state_id,
        farms: state.shoppingReducer.farms,
        categories: state.shoppingReducer.categories
    }
}

export default connect(mapStateToProps, { getFarms, getUser, getCategories, getLocalItems })(Home);