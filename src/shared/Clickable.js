import React from 'react'
import { useSelector } from 'react-redux'

export default function Clickable(props) {
    const { currentView } = useSelector(state => state.common)
    return (
        <button
            className={`flex items-center justify-center ${currentView == props.title ? 'font-bold' : ''}`}
            style={{ fontSize: 15, color: 'gray', ...props.style, color: currentView == props.title ? 'indigo' : 'gray' }}
            onClick={props.onClick}
        >{props.children} {props.title}</button>
    )
}
