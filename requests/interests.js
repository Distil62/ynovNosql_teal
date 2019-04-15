import fetch from 'isomorphic-unfetch';

export default async function () {
    const response = await fetch('http://localhost:3000/api/interest/');
    const interests = await response.json();

    return interests;
}