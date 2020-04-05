import { ADD_STRING, FILTER_LINES } from '../actionTypes';
import { ActionsTypes } from '../actions';

export type StateType = {
    list: Array<string>;
    filterValue: string;
}

const initialState: StateType = {
    list: ['test init string1','test init string2', 'test init string3'],
    filterValue: ''
};

const table = (state = initialState, action: ActionsTypes): StateType => {
    switch(action.type) {
        case ADD_STRING: { 
            return {
                ...state,
                list: [...state.list, action.payload],
            };;
        }
        case FILTER_LINES: {
            return {
                ...state,
                filterValue: action.payload,
            };
        }
        default: {
            return state;
        }
    }

}

export default table;