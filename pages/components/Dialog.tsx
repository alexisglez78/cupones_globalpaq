import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
  root: {
    margin: 0,
  },
  closeButton: {
    position: 'absolute',
    color: 'grey'
  },
});

const DialogTitle =((props) => {
  const classes = styles();
  const { children, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" onClick={onClose}>
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs(props) {
  return (
    <div>
      <Dialog onClose={props.handleClose} aria-labelledby="customized-dialog-title" open={props.open}>
        <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
          Importante
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            No olvides guardar tu tracking para su futuro rastreo.
          </Typography>
          <Typography gutterBottom>
            <strong>Tracking: </strong>{props.tracking}
          </Typography>
          <Typography gutterBottom>
            <a href={props.href} target="_blank" rel="noopener noreferrer">Imprimir mi guia</a>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={props.handleClose} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}