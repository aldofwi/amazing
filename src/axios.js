import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-amazing-16b7c.cloudfunctions.net/api' // THE API (Cloud function) URL
})

export default instance

// http://127.0.0.1:5001/amazing-16b7c/us-central1/api

// CMD Deploy on Firebase :
// hosting = front-end
// functions = back-end