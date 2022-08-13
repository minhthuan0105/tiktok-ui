import axios from 'axios';

const htppRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, options = {}) => {
    const respone = await htppRequest.get(path, options);
    return respone.data;
};

export default htppRequest;
