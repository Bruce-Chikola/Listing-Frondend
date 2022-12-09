import React from 'react'

export default function Container(props) {
    const { children, className, style } = props
    const classList = `border rounded bg-white p-5 ${className}`
    const styling = { width: '90%', height: '90%', ...style }
    return (
        <div className={classList} style={styling} >{children}</div>
    )
}
