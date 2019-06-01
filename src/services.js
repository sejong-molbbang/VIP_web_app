import axios from 'axios';
import Cookies from 'js-cookie';

export function loginRequest(email, passwd, act_func) {
    //var csrftoken = Cookies.get('csrftoken');
    axios.post('http://localhost:8000/api/signin', {
        //headers: {'X-CSRFToken': csrftoken},
        id: email,
        passwd: passwd
    })
    .then(function (response) {
        console.log(response.data.result);
        act_func(response.data.result);
    })
    .catch(function (error) {
        console.log(error);
        act_func('fail');
    });
}

export function registerRequest(email, passwd, act_func) {
    //var csrftoken = Cookies.get('csrftoken');
    axios.post('http://localhost:8000/api/signup', {
        //headers: {'X-CSRFToken': csrftoken},
        id: email,
        passwd: passwd
    })
    .then(function (response) {
        console.log(response.data.result);
        act_func(response.data.result);
    })
    .catch(function (error) {
        console.log(error);
        act_func('fail');
    });
}

export function logoutRequest() {
    axios.post('http://localhost:8000/api/signout', {
        id : 'logout'
    }).then(function (response) {
        console.log(response.data.result);
    })
    .catch(function (error) {
        console.log(error);
    });
}