import React, { useState } from 'react'
import queries from '../data/queries';

const Editor = ({ code, setCode, handleSubmit, setTab, tab }) => {
    const handleChange = (e) => {
        setCode(e.target.value);
    }

    const changeTab = (e) => {
        e.preventDefault();
        setCode(queries[e.target.value]);
        setTab(e.target.value);
    }

    return (
        <div className='w-full lg:pt-16 md:pt-16 border border-gray-600'>
            <form onSubmit={handleSubmit}>
                <div className='p-2.5 items-center border-b-2 bg-slate-900 border-gray-700 font-medium text-center text-gray-300 flex justify-between'>
                    <div>
                        SQL Query Editor
                    </div>
                    <button disabled={code.length <= 0} type='submit' className='bg-green-600 disabled:bg-gray-500 hover:bg-green-500 px-5 text-sm py-1.5 text-white rounded-lg'>
                        Run SQL
                    </button>
                </div>
                <div className='flex bg-gray-800 text-sm text-gray-300'>
                    <button onClick={changeTab} value={0} className={`py-1.5 border-gray-600  border rounded-t-lg px-3 ${tab == 0 && 'bg-gray-950 text-green-500 border-b-0 border-gray-400'}`}>Query Customers</button>
                    <button onClick={changeTab} value={1} className={`py-1.5 border-gray-600  border rounded-t-lg px-3 ${tab == 1 && 'bg-gray-950 text-green-500 border-b-0 border-gray-400'}`}>Query Sales</button>
                    <button onClick={changeTab} value={2} className={`py-1.5 border-gray-600  border rounded-t-lg px-3 ${tab == 2 && 'bg-gray-950 text-green-500 border-b-0 border-gray-400'}`}>Query Students</button>
                </div>
                <div className='lg:h-[40vh] md:h-[40vh] h-[20vh]'>
                    <textarea placeholder='Write your query here..' onChange={handleChange} defaultValue={queries[tab]} value={code} name="code" id="code" className='h-full w-full bg-gray-950 outline-none p-2'>
                    </textarea>
                </div>
            </form>
        </div>
    )
}

export default Editor;