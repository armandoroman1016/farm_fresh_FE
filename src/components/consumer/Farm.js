import React from 'react'

const Farm = props => {

    const { farm } = props
    

    return (
        <div className = 'farm-container'>
            <img src='https://images.unsplash.com/photo-1553285906-9a0604da169f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=842&q=80' alt = 'farm_logo' className = 'logo'/>
            <p className = 'farm-name'>{farm.name}</p>
            <p className = 'farm-address'>{farm.address}</p>
        </div>
        )
}

export default Farm;