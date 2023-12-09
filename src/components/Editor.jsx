import React, { useState } from 'react'

const Editor = ({ code, setCode, handleSubmit }) => {
    const [isEnabled, setIsEnabled] = useState(false);

    const handleChange = (e) => {
        setCode(e.target.value);
        if (e.target.value.length > 0) {
            setIsEnabled(true);
        } else {
            setIsEnabled(false);
        }
    }

    return (
        <div className='w-full lg:pt-16 md:pt-16 border border-gray-600'>
            <form onSubmit={handleSubmit}>
                <div className='p-2.5 items-center border-b-2 bg-slate-900 border-gray-700 font-medium text-center text-gray-300 flex justify-between'>
                    <div>
                        SQL Query Editor
                    </div>
                    <button disabled={!isEnabled} type='submit' className='bg-purple-600 disabled:bg-gray-500 hover:bg-purple-500 px-5 text-sm py-1.5 text-white rounded-lg'>
                        Run SQL
                    </button>
                </div>
                <div className='lg:h-[40vh] md:h-[40vh] h-[20vh]'>
                    <textarea onChange={handleChange} value={code} name="code" id="code" className='h-full w-full bg-gray-950 outline-none p-2'>
                    </textarea>
                </div>
            </form>
        </div>
    )
}

export default Editor;