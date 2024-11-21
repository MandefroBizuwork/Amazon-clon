import { type } from "./action.type";

export const initialState = {
    basket: []
};

export const reducer = (state, action) => {
    switch (action.type) {
        case type.ADD_TO_CART:
            // Check if item already exists in the basket
            const exists = state.basket.some(item => item.id === action.item.id);
            
            if (!exists) {
                return {
                    ...state,
                    basket: [...state.basket, action.item]
                };
            }
            // If item exists, return the current state unchanged
            return state;
            
            case type.REMOVE_FROM_CART:
                return {
                    ...state,
                    basket: state.basket.filter(item => item.id !== action.id),
                  };
        default:
            return state;
    }
};
