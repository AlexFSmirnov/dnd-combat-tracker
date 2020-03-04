import {
    ERROR_DIALOG_OPENED,
    ERROR_DIALOG_CLOSED,
} from './types';

export const openErrorDialog = (message: JSX.Element) => ({
    type: ERROR_DIALOG_OPENED,
    payload: message,
});

export const closeErrorDialog = () => ({
    type: ERROR_DIALOG_CLOSED,
});

export const openCorsDialog = () => ({
    type: ERROR_DIALOG_OPENED,
    payload: 'Cors blah blah',
});

export const openCaptchaDialog = () => ({
    type: ERROR_DIALOG_OPENED,
    payload: 'Captcha kekaptcha',
});
