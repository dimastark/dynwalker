export default function (url, options = {}) {
    return fetch(getRequestUrl(url), getRequestOptions(options))
        .then(response => response.json());
}

function getRequestUrl(url) {
    return `${process.env.REACT_APP_SERVER_HOST}/api/${url}`;
}

function getRequestOptions(options = {}) {
    return {
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        ...options
    };
}
