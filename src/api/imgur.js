/*
Client ID: c4e07e7724656b6
Client secret: fb8bbb9fd8fe357993c86fbdff5af6cd961ddbd0
*/
import qs from 'qs';
import axios from 'axios';

const CLIENT_ID =  'c4e07e7724656b6'
var ROOT_URL = 'https://api.imgur.com'

export default {
    login(){
        const queryString = {
            client_id : CLIENT_ID,
            response_type: 'token'
        }
        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`
    },
    fetchImages(token){
        return axios.get(`${ROOT_URL}/3/account/me/images`, {
            headers: {
                Authorization: `Bearer ${token}` 
            }
        });
    },
    uploadImages(images, token){
        const promises = Array.from(images).map(image => {

            const formData = new FormData();
            formData.append('image', image)

            return axios.post(`${ROOT_URL}/3/image`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            
        })

        return Promise.all(promises)
    }
}