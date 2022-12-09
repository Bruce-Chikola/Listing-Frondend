import React, { useState } from 'react'

export default function Switcher() {
    const [swtchState, setSwitchState] = useState(false)
    const [switchPos, setSwitchPos] = useState({ left: 0 })
    const stl = {
        width: 70,
        heioght: 20,
        background: '#EEEEEE',
        borderRadius: 20,
        overflow: 'hidden',
        padding: 2,
    }
    const swt = {
        background: '#2ac489',
        width: '50%',
        height: 20,
        borderRadius: 50,
        cursor: 'pointer',
        transition: '.5s',
        top: 0,
        boxShadow: 'rgba(100, 100, 111, 0.9) 0px 7px 15px 0px',
        ...switchPos
    }

    const switchMode = () => {
        // do nothing for now
    }
    const onSwtichClick = () => {
        switchMode()
    }
    return (
        <div className='relative switcher-wrapper' style={stl}>
            <div onClick={() => onSwtichClick()} className="absolutes" style={swt}></div>
        </div>
    )
}
