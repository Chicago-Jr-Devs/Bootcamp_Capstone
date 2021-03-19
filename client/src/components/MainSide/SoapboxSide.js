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
import MenuItem from "@material-ui/core/MenuItem";

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
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: "200px"
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


export function SoapboxSide(props){
  const [soapbox, setSoapbox] = useState({category: "", subject: "", address: "", description: ""});
  const [soapboxes, setSoapboxes] = useState([])

  async function submitSoapbox(event) {
    event.preventDefault()
    console.log("hi", soapbox)
    await axios.post('/soapbox', soapbox)
    
    setSoapboxes([...soapboxes, soapbox])
    setSoapbox({category: "", subject: "", address: "", description: ""})
  }
  
  const handleSoapbox = (event) => {
    
    const {id, value} = event.target
    setSoapbox({...soapbox, [id]:value})
  }

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
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item sm={12}>
          <div>
              <h3>Create a Soapbox</h3>
              <p>Voice your issue and get your community to engage a conversation with you.</p>
              <Button variant="contained" color="primary" type="button" onClick={handleOpen}>
                  Get my Soapbox!
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
                  <h2 id="spring-modal-title">Create your Soapbox</h2>
                  <p id="spring-modal-description">Enter and submit your concern or idea.</p>
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
                    <Button variant="contained" color="primary" type="button" onClick={submitSoapbox}>
                      Publish
                    </Button>
                  </div>

                  </div>
                      </Fade>
                  </Modal>
                </div>
            </Grid>
        </Grid>
    </div>
  )
}