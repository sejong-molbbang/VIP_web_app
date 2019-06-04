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

export function maskingRequest(video, images, email, only_face, act_func) {
    if (video == "") {
        return "not choose video";
    }
    axios.post('http://localhost:8000/ml/masking', {
        video: video,
        images: images,
        email: email,
        only_face: only_face,
    }).then(function (response) {
        if (response.data.result == "complete") {
            act_func(response.data.result, response.data.url);
        }
        else {
            act_func(response.data.result, "");
        }
    })
    .catch(function(error) {
        console.log(error);
        act_func('error', "");
    });
}
