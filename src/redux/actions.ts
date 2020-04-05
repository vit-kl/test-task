import { ADD_STRING, FILTER_LINES } from "./actionTypes"

type AddStringTypes = {
    type: string;
    payload: string;
}

type FilterLinesTypes = {
    type: string;
    payload: string;
}

export type ActionsTypes = AddStringTypes | FilterLinesTypes;

export const addString = (string: string): AddStringTypes => {
    return {
        type: ADD_STRING,
        payload: string,
    }
}

export const filterLines = (string: string): FilterLinesTypes => {
    return {
        type: FILTER_LINES,
        payload: string,
    }
}