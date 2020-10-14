const BASE_URL = '/api/questions';

export function getRandom() {
    return fetch(BASE_URL)
    .then(res => res.json());
}