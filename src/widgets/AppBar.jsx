import React from 'react'

const AppBar = ({ title }) => {
    return (
        <div className='row p-3 m-0 sticky-top ' >
            <h4 className='card-title'>  {title} Screen </h4>
        </div>
    )
}

export default AppBar
