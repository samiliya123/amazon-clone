export const initialState = {
    basket: [{
    
 
        id: '1',
        title: ' A wristwatch is a watch with a strap which you wear round your wrist. \r ',
        price: 45.4,
        rating: 6,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D "
 
    },
]
}

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0)

function reducer (state, action)  {
    console.log(action);
    
    switch(action.type) {
        case 'ADD_TO_BASKET': 
        return {
            ...state,
            basket: [...state.basket, action.item]
        };

        case 'REMOVE_FROM_BASKET':
            const newBasket = [...state.basket]
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            if (index >= 0) {
                newBasket.splice(index, 1)
            }
            return {
                ...state,
                basket: newBasket
            };
            default: 
            return state
    }
}

export default reducer