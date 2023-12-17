import React from 'react'

const Table = ({ data, name }) => {
    return (
        <div className="w-full">
            <div className="text-lg font-semibold pb-3">{name}</div>
            <div className='w-full lg:min-w-auto min-w-[16rem] lg:overflow-x-auto overflow-x-scroll overflow-y-hidden'>
                <table className="w-full  bg-gray-950 text-sm border border-gray-600 rounded-lg">
                    <thead>
                        <tr className='font-medium bg-gray-950'>
                            {
                                Object.keys(data[0]).map((key, index) => {
                                    return (
                                        <th key={index} className="py-3 px-4 border-b border-r bg-gray-900 border-gray-600"><div className='flex items-center gap-3'>{key}</div></th>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => {
                            return (
                                <tr key={index} className='border-b border-gray-600 hover:bg-gray-900'>
                                    {
                                        Object.keys(item).map((key, index) => {
                                            return (
                                                <td key={index} className="py-3 px-4 border-b border-r border-gray-700">{item[key]}</td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;