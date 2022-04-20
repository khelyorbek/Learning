function get(url) {
    const request = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
        request.onload = function () {
            if (request.status >= 200 && request.status < 300) {
                resolve(JSON.parse(request.response))
            } else {
                reject({
                    msg: 'Server error',
                    status: request.status,
                    request: request
                })
            }
        }
        request.onerror = function handleError() {
            request = null;
            reject({
                msg: 'NETWORK ERROR!'
            })
        }
        request.open('GET', url);
        request.send();
    })
}

get('https://swapi.dev/api/planets/1')
    .then(res => {
        console.log(res)
        return get('https://swapi.dev/api/planets/2')
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))