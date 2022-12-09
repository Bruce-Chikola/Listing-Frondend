import React from 'react'

export default function Button(props) {
    const { style, className, children } = props
    const classList = `rounded flex items-center justify-center  rbtn ${className}`
    return (
        <div>
            <button type={props.type} className={classList} onClick={props.onClick} style={style}>{children}</button>
        </div>
    )
}
