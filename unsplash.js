import axios from 'axios'
// import React from 'react'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID vQXUiP-zDC2ecLdbPXuTzT0TPDSkdfP2uiTfLXt2F3c'
    }
});



