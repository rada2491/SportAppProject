import {ADD_NEW} from "../constants/"

export const addNewCard = Card => ({
    type: ADD_NEW, payload: Card
});