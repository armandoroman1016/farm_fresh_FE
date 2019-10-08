import React, { useEffect } from 'react'
import Farms from './Farms'
import { connect } from 'react-redux'
import { getFarms, getUser } from '../../actions/consumer_actions/shopping'

const Home = props => {

    const { cityId } = props
    const { stateId } = props


    useEffect(() => {
        props.getUser(localStorage.getItem('ff_berries'))
        if(cityId){
            props.getFarms(cityId, stateId);
        }
    },[cityId])

    return (
        <div>
            <h1>Hello Shopper</h1>
            <Farms />
        </div>
    )
}
const mapStateToProps = state => {
    return {
        cityId: state.shoppingReducer.user.city_id,
        stateId: state.shoppingReducer.user.state_id
    }
}

export default connect(mapStateToProps, { getFarms, getUser })(Home);