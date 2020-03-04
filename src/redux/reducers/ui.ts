import {
    ERROR_DIALOG_OPENED,
    ERROR_DIALOG_CLOSED,
    UIActionType,
} from '../actions/ui';

export type UIState = {
    errorDialog: {
        isOpen: boolean;
        message?: JSX.Element;
    };
};

const initialState: UIState = { 
    errorDialog: {
        isOpen: false,
    },
};

export const ui = (state = initialState, action: UIActionType) => {
    switch (action.type) {
    case ERROR_DIALOG_OPENED:
        if (!state.errorDialog.isOpen) {
            return {...state, errorDialog: { isOpen: true, message: action.payload }};
        }
        return state;

    case ERROR_DIALOG_CLOSED:
        return {...state, errorDialog: { isOpen: false, message: state.errorDialog.message }};

    default:
        return state;
    }
};