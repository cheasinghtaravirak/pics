import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID 69616fb3c4ff340a477d0a761f4cec94ce06f558089d16553b115e663455b847',
  }
});
