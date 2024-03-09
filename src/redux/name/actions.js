import { ADD } from "./actionTypes"

export const add = (name) => {
    return {
        type: ADD,
        payload: name,
    }
}