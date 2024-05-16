import React, { useState } from 'react'
import Form from './components/form';
import './App.css'

function App() {
    const [color, setColor] = useState("white");


    return (

        <div className='w-full h-screen duration-200 ' style={{ background: color }}>
          <Form />
           

            <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
                {/* for red */}
                <button onClick={() => setColor('red')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "red" }} >Red</button>
                {/* for Green */}
                <button onClick={() => setColor('green')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "green" }}>Green</button>
                {/* for Yellow */}
                <button onClick={() => setColor('grey')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "black" }}>Grey</button>
                {/* for Blue */}
                <button onClick={() => setColor('blue')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "blue" }}>Blue</button>
                {/* for Purple */}
                <button onClick={() => setColor('purple')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "purple" }}>Purple</button>
                {/* for White */}
                <button onClick={() => setColor('white')} className='outline-none px-4 py-1 rounded-full text-dark shadow-lg' style={{ backgroundColor: "white" }}>White</button>
                {/* for Black */}
                <button onClick={() => setColor('yellow')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "yellow" }}>Yellow</button>

            </div>
        </div>
    )
}

export default App