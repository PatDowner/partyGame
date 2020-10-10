import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: 20,
    marginBottom: 20,
    margin: 'auto',
    borderRadius: 5,
    width: '90%',
    height: '95%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modal: {
    position: 'absolute',
    top: 50,
    borderRadius: 1,
  },
  img: {
    width: '100%',
  },
  text: {
    alignItems: 'center',
    fontSize: '30px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  }
}));

const Question = props => {
  console.log(props.question)
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title" className={classes.text}>Number {props.question.question}:</h2>
      <Grid container spacing={2} className={classes.container}>
        <Grid item xs={4}>
          <img src={props.question.person1img} className={classes.img} />
        </Grid>
        <Grid item xs={4}>
          <img src={props.question.person2img} className={classes.img} />
        </Grid>
        <Grid item xs={4}>
          <img src={props.question.person3img} className={classes.img} />
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.container}>
        <Grid item xs={4} className={classes.text}>
          {props.question.person1}
        </Grid>
        <Grid item xs={4} className={classes.text}>
          {props.question.person2}
        </Grid>
        <Grid item xs={4} className={classes.text}>
          {props.question.person3}
        </Grid>
      </Grid>
    </div>
  );

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        {props.question.question}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
      >
        {body}
      </Modal>
    </div>
  );
}

export default Question