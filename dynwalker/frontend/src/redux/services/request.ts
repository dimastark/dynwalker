export default function request<T>(url: string, options: RequestInit = {}): Promise<T> {
    return fetch(getRequestUrl(url), getRequestOptions(options))
        .then(response => response.json());
}

function getRequestUrl(url: string): string {
    return `${process.env.REACT_APP_SERVER_HOST}/api/${url}`;
}

function getRequestOptions(options: RequestInit = {}): RequestInit {
    return {
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        ...options
    };
}
