import React from 'react'

const Toast = ({ msg, handleShow, bgColor }) => {
    return (
        <div className={`toast show position-fixed ${bgColor}`}
            style={{
                top: '5px',
                right: '5px',
                minWidht: '280px',
                zIndex: 9,
            }}>
            <div className={`toast-header text-light ${bgColor} d-flex justify-content-between`}>
                <strong className="mr-auto text-light">{msg.title}</strong>
                <button
                    type="button"
                    className="ms-2 mb-1 close text-light"
                    data-dismiss="toast"
                    style={{
                        outline: 'none',
                        background: 'none',
                        border: 'none',
                    }}
                    onClick={handleShow}
                >
                    X
                </button>
            </div>
            <div className="toast-body text-light">
                {msg.msg}
            </div>
        </div>
    )
}

export default Toast
