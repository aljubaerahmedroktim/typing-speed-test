import {ADD} from "./actionTypes";

const initialState = {
    name: "",
}

const nameReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case ADD:
            return {
                name : actions.payload,
            }
    
        default:
            return state;
    }
}

export default nameReducer;