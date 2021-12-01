import React from 'react'

const Notifications = ({open, children,shouldCloseOnOverlayClick,onRequestClose, onClose}) => {
 

    if(!open) return null
    return (
        <>
        <div  className='overlay'>
            
            {children}
        </div>
            
        </>
    )
}

export default Notifications
