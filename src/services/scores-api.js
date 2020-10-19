const BASE_URL = '/api/users';

export function getScores() {
    return fetch(BASE_URL)
    .then(res => res.json());
}