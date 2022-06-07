import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export default class PostService {
    static async getAll() {
        const { data } = await axios.get(`${API_URL}/posts`);
        return data;
    }
}
