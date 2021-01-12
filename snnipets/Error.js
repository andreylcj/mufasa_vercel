import React from 'react'

function Error(props) {
    return (
        <div className="alert alert-error">
            <i className="fas fa-exclamation-triangle"></i>
            <p>{props.message}</p>
        </div>
    )
}

export default Error
