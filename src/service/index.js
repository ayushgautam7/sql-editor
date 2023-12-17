import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;

export const getTable = async (table_name) => {
    const response = await axios.get(`/api/${table_name}`);
    if (response.status !== 200) throw Error(body.message);
    return response.data;
}

export const getQueryData = async (query_id) => {
    const response = await axios.get(`/api/queries/${query_id}`);
    if (response.status !== 200) throw Error(body.message);
    return response.data;
}

