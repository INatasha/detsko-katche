import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
}));

/**
 * Shared component
 * Common dialog
 *
 * @param {String} title - dialog title
 * @param {String} content - dialog content
 * @param {Array} actions - array of objects, each object containing info about certain dialog action
 *                [{ name - action name
 *                   onClick - function that would execute on click
 *                   disabled - condition when the action should be disabled
 *                   variant - material ui button variant ('contained', 'outlined',..)
 *                }]
 * @param {Function} onClose - action
 */
function CommonDialog({
  title = '',
  content = '',
  actions = [],
  onClose = () => {},
}) {
  const classes = useStyles();
  return (
    <Dialog open maxWidth="sm" onClose={onClose}>
      <DialogTitle>
        {title}
        <IconButton className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        {actions.map((action, index) => (
          <Button
            key={index}
            color="primary"
            onClick={action.onClick}
            disabled={action.disabled ? action.disabled : false}
            variant={action.variant ? action.variant : 'contained'}
          >
            {action.name}
          </Button>
        ))}
      </DialogActions>
    </Dialog>
  );
}

export default CommonDialog;
