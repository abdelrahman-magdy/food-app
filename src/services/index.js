import axios from 'axios';

//"proxy": "http://foodie.aqarmap.net" in file package.json 
// i write this in file package to fixing issue cors browser origin
const apiUrl = 'api/orders/115';

const headers = {
    headers:{ 'Content-Type':  'application/json'}
};

export async function getOrderDetails() {
    let response = await axios.get(`${apiUrl}`)
    return response;
}
export async function  incrementTheItemQuantity (itemID) {
    let response = await axios.post(`${apiUrl}/items/${itemID}?user_id=2`, headers)
    return response;
}
export async function  decrementTheItemQuantity (itemID) {
    let response = await axios.delete(`${apiUrl}/items/${itemID}?user_id=2`, headers)
    return response;
}
