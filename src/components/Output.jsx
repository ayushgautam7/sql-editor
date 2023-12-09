import outputs from "../data/outputs"

const Output = ({ result }) => {


    return (
        <div className='w-full border border-gray-600 border-b-0'>
            <div className='p-2 items-center border-b-2 bg-slate-900 border-gray-700 font-medium text-center text-gray-300 flex justify-between'>
                Output
            </div>
            <div className="p-5">
                {result.length > 0 && <table className="w-full overflow-scroll bg-gray-950 text-sm border border-gray-600 rounded-lg">
                    <thead>
                        <tr className='font-medium bg-gray-950'>
                            {
                                Object.keys(result[0]).map((key, index) => {
                                    return (
                                        <th key={index} className="py-3 px-4 border-b border-r border-gray-600"><div className='flex items-center gap-3'>{key}</div></th>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {result.map((item, index) => {
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
                </table>}
            </div>
        </div>
    )
}

export default Output