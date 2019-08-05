import axios from 'axios';

export default axios.create({
  baseURL: 'https://phonebook-8fa97.firebaseio.com'
})
