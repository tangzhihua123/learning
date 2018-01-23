import {
    ADD_COUNTER
} from '../action/counter';

const initialState = {
    count: 0
};
const counter = (state = initialState, action) => {
    debugger;
    const count = state.count;
    switch (action.type) {
        case ADD_COUNTER:
            {
                debugger;
                return {
                    ...state,
                    count: count + 1
                }
            }
        default:
            return state
    }
}

export default counter;