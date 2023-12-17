import { useQuery } from '@tanstack/react-query';
import { FaTable } from 'react-icons/fa';
import { getTable } from '../service';


const Schema = ({ table_name, setShowPopupData }) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['schema', table_name],
        queryFn: () => getTable(table_name), // Wrap it in an arrow function
        staleTime: Infinity,
        onSuccess: (data) => {
            console.log(data);
        }
    });

    if (isLoading) {
        return <div>Loading...</div>
    } else if (isError) {
        return <div>Error loading data</div>;
    }

    return (
        <div>
            <button onClick={() => setShowPopupData(data)} className="text-lg font-semibold pb-1">
                <FaTable size={20} className='inline-block mr-2 text-gray-300' /> {table_name} [-]
            </button>
            <div className="border-l-2 ml-2.5 text-sm font-medium">
                {Object.entries(data.schema).map(([columnName, columnType], index) => (
                    <SchemaItem key={index} name={columnName} type={columnType} />
                ))}
            </div>
        </div>
    );
}

export default Schema;

const SchemaItem = ({ name, type }) => {
    return (
        <div className="flex items-start gap-2">
            <div>—</div>
            <p>
                {name} <span className="text-blue-600">{type}</span>
            </p>
        </div>
    );
}
