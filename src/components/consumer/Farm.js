import React from 'react'

const Farm = props => {

    const { farm } = props

    return (
        <div className = 'farm-container'>
            <p>{farm.name}</p>
            <p>{farm.address}</p>
        </div>
        )
}

export default Farm;