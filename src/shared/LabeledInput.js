import React from 'react'
import Input from './Input'

export default function LabeledInput(props) {
    const lc = `text-gray-500 mb-1 ${props.labelClass}`
    // console.log(props);

    return (
        <div className='flex flex-col my-5'>
            <small className={lc}>{props.label}</small>
            <Input props={props} />
        </div>
    )
}
