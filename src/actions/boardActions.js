import { LOAD_BOARD_CLEAR, CALL_WRITE } from './actionTypes';
import boardApi from '../api/boardApi';


export function writeBoard(content) {
    return (dispatch) => {
        return boardApi.saveContent(content)
        .then(content => dispatch({type : CALL_WRITE, content }))
        .catch(error => {
            throw(error);
        });
    }
};

export function loadBoard() {
    return (dispatch) => {
        return boardApi.getAllContents()
        .then(contents => dispatch({type : LOAD_BOARD_CLEAR, contents}))
        .catch(error => {
            throw(error);
        });
    }
};

