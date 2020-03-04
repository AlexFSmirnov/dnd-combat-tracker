export const CORS_DIALOG_OPENED = 'CORS_DIALOG_OPENED';
export const CORS_DIALOG_CLOSED = 'CORS_DIALOG_CLOSED';
export const CAPTCHA_DIALOG_OPENED = 'CAPTCHA_DIALOG_OPENED';
export const CAPTCHA_DIALOG_CLOSED = 'CAPTCHA_DIALOG_CLOSED';
export const ERROR_DIALOG_OPENED = 'ERROR_DIALOG_OPENED';
export const ERROR_DIALOG_CLOSED = 'ERROR_DIALOG_CLOSED';

export interface CorsDialogOpenedAction {
    type: typeof CORS_DIALOG_OPENED;
}

export interface CorsDialogClosedAction {
    type: typeof CORS_DIALOG_CLOSED;
}

export interface CaptchaDialogOpenedAction {
    type: typeof CAPTCHA_DIALOG_OPENED;
}

export interface CaptchaDialogClosedAction {
    type: typeof CAPTCHA_DIALOG_CLOSED;
}

export interface ErrorDialogOpenedAction {
    type: typeof ERROR_DIALOG_OPENED;
    payload: JSX.Element;
}

export interface ErrorDialogClosedAction {
    type: typeof ERROR_DIALOG_CLOSED;
}

export type UIActionType = CorsDialogOpenedAction | CorsDialogClosedAction | CaptchaDialogOpenedAction | CaptchaDialogClosedAction | ErrorDialogOpenedAction | ErrorDialogClosedAction;
