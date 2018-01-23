import { ADD_TODO } from '../action/todoList';

const initialState = {
    todo:[],
    done:[],
    allData:{}
};
const todo = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            return {
                ...state,
                data: action.data
            }
        }
        default:
            return state
    }
}

export default todo;