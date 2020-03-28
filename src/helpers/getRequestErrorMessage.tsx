import React from 'react';
import { AxiosError } from 'axios';
import { Link } from '@material-ui/core';

export const getRequestErrorMessage = (error: AxiosError): JSX.Element => {
    if (error.response) {
        switch (error.response.status) {
        case 404:
            return (
                <React.Fragment>
                    Invalid character URL, page not found. Make sure that the ID is correct and that character privacy is set to "Public".
                    <br /><br />
                    Error message: {error.message}
                </React.Fragment>
            );
        
        case 403:
            return (
                <React.Fragment>
                    D&D Beyond blocked a request because it thinks I'm a robot. Opening <Link href="https://www.dndbeyond.com/">dndbeyond.com</Link> in Incognito mode and passing the captcha there usually helps.
                    <br /><br />
                    Error message: {error.message}
                </React.Fragment>
            );

        default:
            break;
        }
    }

    return (
        <React.Fragment>
            Request was unsuccessful. Most likely your browser is blocking Cross-Origin requests (CORS). Make sure you have a CORS-allowing extension installed or disable D&D Beyond integration in settings.
            <br /><br />
            Error message: {error.message}
        </React.Fragment>
    );
};
