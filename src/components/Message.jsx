import React from 'react'

function Message({ children }) {
    return (
        <div className='text-2xl font-semibold text-center'>{children}</div>
    )
}

export default Message