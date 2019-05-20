import axios from 'axios';
import Cookies from 'js-cookie';

export function loginRequest(email, passwd) {
    //var csrftoken = Cookies.get('csrftoken');
    axios.post('http://localhost:8000/api/signin', {
        //headers: {'X-CSRFToken': csrftoken},
        id: email,
        passwd: passwd
    })
    .then(function (response) {
        console.log(response.data.result)
        if(response.data.result == 'success')
            return 'success';
        else
            return 'fail';
    })
    .catch(function (error) {
        console.log(error);
        return 'fail';
    });
}