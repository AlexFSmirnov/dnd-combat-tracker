import React from 'react';
import { Tooltip, TooltipProps } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

export default withStyles(theme => ({
    tooltip: {
        fontSize: 20,
        backgroundColor: theme.palette.secondary.main,
    },
    arrow: {
        color: theme.palette.secondary.main,
    }
}))((props: TooltipProps) => <Tooltip arrow {...props} />);
