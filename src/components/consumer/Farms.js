import React from 'react'
import { connect } from 'react-redux'
import Farm from './Farm'


const Farms = props => {

    const { farms } = props

    return (
        <div className = 'farms-container'>
            <h1>Shop Farms</h1>
            { farms.length ? farms.map( farm => {
               return <Farm farm = {farm} key = {farm.id}/>
            }) : null}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        farms: state.shoppingReducer.farms
    }
}

export default connect(mapStateToProps, {})(Farms);