import React, { useState } from 'react'
import Tables from '../components/Tables'
import Editor from '../components/Editor'
import Output from '../components/Output'
import outputs from '../data/outputs'

const Dashboard = () => {
    const [code, setCode] = useState('');
    const [result, setResult] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const output = generateOutput();
        setResult(output);
        console.log(code, output);
    }

    const generateOutput = () => {
        const rand_idx = Math.floor(Math.random() * outputs.length);
        return outputs[rand_idx];
    }

    return (
        <section className='flex lg:flex-row md:flex-row flex-col w-full h-screen'>
            <Tables />
            <div className='lg:w-1/2 md:w-1/2 w-full relative'>
                <Editor code={code} setCode={setCode} handleSubmit={handleSubmit} />
                <Output result={result} />
            </div>
        </section>
    )
}

export default Dashboard