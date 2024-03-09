import {RESULT} from "./actionTypes";

const initialState = {
    wpm: 0,
    mistakes: 0,
    accuracy: 0,

}

const nameReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case RESULT:
            return {
                wpm : actions.payload.Wpm,
                mistakes: actions.payload.Mistakes,
                accuracy : actions.payload.Accuracy,

            }
    
        default:
            return state;
    }
}

export default nameReducer;