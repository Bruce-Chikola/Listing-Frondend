import React from 'react'

export default function Badge(props) {
    const stl = { minWidth: 40, maxWidth: 70, background: '#BFEFE4', height: 20, borderRadius: 5, fontSize: 13, marginTop: 3, ...props.style }
    const dot = {
        width: 7,
        height: 7,
        background: '#0AA446',
        borderRadius: '50%',
        marginRight: 2
    }
    return (
        <div className='badge flex items-center justify-center ' style={stl}>
            <div style={dot}></div>
            {props.children}
        </div>
    )
}
