import axios from "axios";


// http://localhost:8888/webdev/graphql/wp-json/wp/v2/posts?query=query%20MyQuery%20{posts%20{edges%20{cursor}}}
const instance = axios.create({
    baseURL: 'http://localhost:8888/webdev',
    timeout: 2500,
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
    // headers: {'X-Custom-Header': 'foobar'}
});
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
instance.defaults.headers.post['Content-Type'] = 'application/json';


// Add a request interceptor
instance.interceptors.request.use(function (config) {
/*    config.headers.common["X-CSRFToken"] = document.cookie.replace(
        /(?:(?:^|.*;\s*)csrftoken\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
    );
    config.headers.common["X-M-CSRFToken"] = document.cookie.replace(
        /(?:(?:^|.*;\s*)m-csrftoken\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
    );*/
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});


const methods = {
    get: instance.get,
    post: instance.post,
    put: instance.put,
    patch: instance.patch,
    delete: instance.delete,
};

export default methods;