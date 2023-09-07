import React, { useState } from 'react'

// this useToggle component is made to make toggle in showing and hiding menu

const UseToggle = () => {
    const [el, setEl] = useState(null)
    const open = Boolean(el)
    const handleClick = (event) => {
        setEl(event.currentTarget);
    }
    const handleClose = () => {
        setEl(null);
    }
    return {
        el, open, handleClick, handleClose
    }
}

export default UseToggle