import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export default class PostService {
    static async getAll(limit = 10, page = 1) {
        return await axios.get(`${API_URL}/posts`, {
            params: {
                _limit: limit,
                _page: page,
            },
        });
    }
}
