import { customers, sales, students } from "../data"
import Table from "./Table"

const Tables = () => {
    return (
        <div className='lg:w-1/2 md:w-1/2 w-full lg:h-screen md:h-screen h-[50vh] pt-16 overflow-y-scroll overflow-x-hidden border border-gray-600 relative'>
            <div className='p-2.5 py-3.5 fixed w-full border-b-2 bg-slate-900 border-gray-700 font-medium text-gray-300'>
                Available Tables
            </div>
            <div className='flex flex-col justify-center items-center py-8 pt-16 gap-8'>
                <Table name="Customers" data={customers} />
                <Table name="Sales" data={sales} />
                <Table name="Students" data={students} />
            </div>
        </div>
    )
}

export default Tables;