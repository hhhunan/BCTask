import axios from 'axios';

const api = axios.create({
  baseURL: 'https://bs.maghun.in/api',
  'content-type': 'application/json',
});

class Api {
  static usersList() {
    return api.get('/visitors');
  }

  static userTypes() {
    return api.get('/visitor-types');
  }

  static createUser(data) {
    return api.post('/visitor', data);
  }

  static deleteUser(id) {
    return api.delete(`/visitor/${id}`);
  }

  static getSingleUser(id) {
    return api.get(`/visitor/${id}`);
  }
}

export default Api;
