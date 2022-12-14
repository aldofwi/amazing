export const initialState = {
    basket: [],
}

// Selector | (manipulate prices for summing | initial state)
export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => (item.price * item.quantity) + amount, 0)

const reducer = (state, action) => {

    console.log("ACTION === ", action.type);

    switch(action.type) {

        case 'ADD_TO_BASKET' : 
            const index_add = state.basket.findIndex(
                (basketItem) => basketItem.id === action.item.id
            );
            // console.log("INDEX ADD = ", index_add);

            if(index_add >= 0) {
                // ADD SAME BASKET & QTY + 1

                state.basket[index_add].quantity++;

                console.log("<<< ITEM INSIDE >>> \n");
                // console.log("ACTION ITEM = ", action.item.quantity);
                console.log("STATE BASKET= ", state.basket[index_add].quantity);

                return {
                    ...state,
                    basket: state.basket,
                };
            } else { 
                // ADD NEW BASKET & QTY = 1 || ORIGINAL
                console.log("<<< FIRST TIME >>> \n");
                console.log("STATE BASKET = ", state.basket);

                return {
                    ...state,
                    basket: [...state.basket, action.item],
                };
            };
        case 'EMPTY_BASKET' :
            return {
                ...state,
                basket: [],
            };
        case 'REMOVE_FROM_BASKET' : 
            const index_rem = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            console.log("INDEX REM  = ", index_rem);
            let newBasket = [...state.basket];

            if(index_rem >= 0) {

                if(action.quantity > 1) {
                    state.basket[index_rem].quantity--;
                } else {
                    newBasket.splice(index_rem, 1);
                }

            } else {
                console.warn(
                    `Can not remove product (id: ${action.id}) as it is not in the basket!`
                )
            }
            return {
                ...state, 
                basket: newBasket
            };
        case 'SET_USER' : 
            return {
                ...state,
                user: action.user
            };
        default: return state;

    }

};

export default reducer