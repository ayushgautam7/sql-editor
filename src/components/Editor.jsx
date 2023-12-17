import Editor from "@monaco-editor/react";
import React, { useState } from 'react';
import { MdRefresh } from "react-icons/md";
import { getQueryData } from '../service/index';
import Table from "./Table";
import { toast } from 'react-toastify';
import { MdOutlineCancel } from "react-icons/md";

const queries = [
    {
        query: 'SELECT * FROM students WHERE country = \'USA\' AND age > 20;',
        id: "1"
    },
    {
        query: 'SELECT customer_id, first_name, last_name FROM customers WHERE age > 22;',
        id: "2"
    },
    {
        query: "SELECT * FROM sales WHERE product_name = 'T-Shirt';",
        id: "3"
    },
    {
        query: "SELECT customer_id, first_name FROM customers WHERE age > 22;",
        id: "4"
    },
    {
        query: "SELECT * FROM sales WHERE product_name = 'Cola' AND quantity > 1;",
        id: "5"
    },
    {
        query: "SELECT * FROM students WHERE major = 'Electrical Engineering';",
        id: "6"
    }
]

const CodeEditor = () => {
    const [code, setCode] = useState('-- SQL Editor to Run SQL Online.');
    const [queryId, setQueryId] = useState(null);
    const [output, setOutput] = useState(null);
    const [showQueries, setShowQueries] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setCode(e.target.value);
    }

    const reset = () => {
        setCode('');
        setQueryId(null);
        toast.success('Code Reset Successfully!');
    }

    const runQery = async () => {
        setLoading(true);
        const map = new Map();
        try {
            const key = "queryId" + queryId;
            if (map.has(key)) {
                setOutput(map.get(key));
                return;
            }
            const response = await getQueryData(queryId);
            map.set(key, response);
            setOutput(response);
            toast.success('Query Executed Successfully!');
        } catch (error) {
            toast.error('Error while executing query!');
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <section className='lg:w-4/5 md:w-4/5 w-full flex'>
            <div className={`px-6 py-4 lg:w-1/3 md:w-1/3 w-full lg:block md:block lg:relative md:relative bg-gray-950 fixed inset-0 z-[10] bg-opacity-30 backdrop-blur-sm flex items-center justify-center ${showQueries ? 'block' : 'hidden'}`}>
                <div className="lg:bg-transparent md:bg-transparent bg-gray-950 lg:p-0 md:p-0 p-5 rounded-lg">
                    <div className="flex items-center justify-between pb-3">
                        <h2 className="text-lg font-bold pb-3">Available Queries</h2>
                        <button onClick={() => setShowQueries(false)} className='p-2 lg:hidden md:hidden block'>
                            <MdOutlineCancel size={26} className='text-rose-500 hover:text-rose-600' />
                        </button>
                    </div>
                    <div className='flex flex-col gap-4 text-sm'>
                        {
                            queries.map((query, index) => {
                                return (
                                    <button onClick={() => {
                                        setCode(query.query);
                                        setQueryId(query.id);
                                        setShowQueries(false);
                                    }} key={index} className='bg-gray-900 hover:bg-sky-600 text-gray-300 hover:text-gray-900 font-medium rounded-lg p-3'>{query.query}</button>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="lg:w-2/3 md:w-2/3 w-full border-l border-gray-700">
                <div className="w-full py-2 font-semibold bg-gray-900 px-4 text-gray-300 flex justify-between items-center">
                    <div className="flex items-center gap-5">
                        <span>Query Editor</span>
                        <button onClick={() => setShowQueries(true)} className="text-sm font-medium text-sky-500 lg:hidden md:hidden block">
                            Available Queries
                        </button>
                    </div>

                    <div className="font-medium flex gap-2">
                        <button onClick={reset} className="text-sky-500 hover:text-sky-600 p-1.5">
                            <MdRefresh size={26} />
                        </button>
                        <button disabled={!queryId} onClick={runQery} className="bg-sky-500 text-sm hover:bg-sky-600 disabled:bg-gray-600 text-gray-900 px-5 rounded-lg">
                            Run Query
                        </button>
                    </div>
                </div>
                <div className='lg:h-[40vh] md:h-[40vh] h-[40vh]'>
                    <Editor
                        height="100%"
                        defaultLanguage="sql"
                        defaultValue={'SELECT * FROM students WHERE country = \'USA\' AND age > 20'}
                        value={code}
                        onChange={handleChange}
                        theme="vs-dark"
                        options={{
                            minimap: {
                                enabled: false
                            }
                        }}
                    />
                </div>
                <div>
                    <div className="w-full py-2 font-semibold bg-gray-900 px-4 text-gray-300">Output</div>
                    <div className='lg:h-[40vh] md:h-[40vh] h-[40vh] overflow-x-hidden overflow-y-scroll'>
                        <div className="p-4 pb-8">
                            {loading ? <div className="text-center text-sky-500 pt-5">Queying....</div> : output && <Table data={output.data} name={output.name} />}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CodeEditor