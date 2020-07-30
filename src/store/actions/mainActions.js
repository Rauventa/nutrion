import {ADD_TO_CART, UPDATE_CART} from "./actionTypes";


export function addToCart(data, cart) {
    cart.push(data);
    return {
        type: ADD_TO_CART,
        cart
    }
}

export function updateCart(data, cart) {
    // eslint-disable-next-line array-callback-return
    const sorted = cart.map(item => {
        if (item.name === data.name) {
            return {
                name: data.name,
                price: data.price,
                contentFirst: data.contentFirst,
                contentSecond: data.contentSecond,
                count: data.count,
            }
        } else {
            return {
                ...item
            }
        }
    });
    return {
        type: UPDATE_CART,
        sorted
    }
}