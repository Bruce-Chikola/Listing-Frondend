import React from 'react'

export default function Input(props) {
    return (
        <div>
            <input
                defaultValue={props.value}
                type={props.type}
                id={props.id}
                onChange={props.onChange}
                style={props.style}
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${props.className}`}
                placeholder={props.placeholder}
            />
        </div>
    )
}
