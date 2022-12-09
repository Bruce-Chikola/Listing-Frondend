import React from 'react'
const Dot = () => {
    return <div className='dot' ></div>
}
export default function Dots({ totalDots }) {
    let dotList = []
    for (let i = 0; i <= totalDots; i++) {
        dotList.push(<Dot key={Math.random() * i * Math.random()} />)
    }
    return (
        <div className='grid grid-cols-6 gap-7'>
            {dotList.map(dot => dot)}
        </div>
    )
}
