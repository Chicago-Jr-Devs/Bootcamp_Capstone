import React, { useEffect, useState } from "react"
import axios from "axios";

// Import material UI components
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';

const categories = [
    {
      value: "education",
      label: "Education"
    },
    {
      value: "law-enforcement",
      label: "Law Enforcement"
    },
    {
      value: "infrastructure",
      label: "Infrastructure"
    },
    {
      value: "transportation",
      label: "Transportation"
    },
    {
        value:"environment",
        label: "Environment"
    },
    {
        value: "public-space",
        label: "Public Space"
    },
    {
        value: "public-policy",
        label: "Public Policy"
    },
    { 
        value: "other",
        label: "Other"
    }
];

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
      flexGrow: 1,
      },
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #3f51b5',
        boxShadow: theme.shadows[2],
        padding: theme.spacing(2, 4, 3),
        width: "260px"
      },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
      from: { opacity: 0 },
      to: { opacity: open ? 1 : 0 },
      onStart: () => {
        if (open && onEnter) {
          onEnter();
        }
      },
      onRest: () => {
        if (!open && onExited) {
          onExited();
        }
      },
    });
  
    return (
      <animated.div ref={ref} style={style} {...other}>
        {children}
      </animated.div>
    );
});
  
Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};


export function SoapboxSide({submitSoapbox, handleSoapbox}){
  const classes = useStyles();

  const [category, setCategory] = React.useState("EUR");

  const handleChange = (event) => {
      setCategory(event.target.value);
  };
  
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{marginTop: "20px"}}>
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item sm={12}>
          <Card className={classes.root}>
            <div className="CardSoapbox">
                <h3>Create a SoapBox</h3>
                <p>Grab a soapbox, voice your concern, and engage in a conversation with your community.</p>
                <Button variant="contained" color="primary" type="button" onClick={handleOpen}>
                    My SoapBox
                </Button>

                <Modal
                  aria-labelledby="spring-modal-title"
                  aria-describedby="spring-modal-description"
                  className={classes.modal}
                  open={open}
                  onClose={handleClose}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                  timeout: 500,
                  }}
                >
                  <Fade in={open}>
                    <div className={classes.paper}>
                      <h2 id="spring-modal-title">Create your SoapBox</h2>
                      <p id="spring-modal-description">Explain and submit your concern or idea here.</p>
                      <div style={{marginTop: 20}}>
                        <TextField
                            id="category"
                            select
                            label="Select Category"
                            onChange={handleSoapbox}
                            SelectProps={{
                                native: true
                            }}
                            helperText="Please select a category"
                            variant="outlined"
                            >
                            {categories.map((option) => (
                                <option key={option.value} value={option.value}>
                                {option.label}
                                </option>
                            ))}
                        </TextField>
                      </div>

                      <div style={{marginTop: 20}}>
                        <TextField
                          required
                          onChange={handleSoapbox} 
                          id="subject"
                          label="Subject"
                          variant="outlined"
                        />
                      </div>
                                  
                      <div style={{marginTop: 20}}>
                        <TextField
                          required
                          onChange={handleSoapbox} 
                          id="address"
                          label="Address"
                          variant="outlined"
                        />
                      </div>

                      <div style={{marginTop: 20}}>
                        <TextField
                          required
                          onChange={handleSoapbox} 
                          id="description"
                          label="Description"
                          variant="outlined"
                        />
                      </div>
                                  
                      <div style={{marginTop: 20}}>
                        <Button variant="contained" color="primary" type="button" onClick={function(event){ submitSoapbox(); handleClose()}}>
                          Publish
                        </Button>
                      </div>

                      </div>
                  </Fade>
                </Modal>
              </div>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
