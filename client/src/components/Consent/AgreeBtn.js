import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export function AgreeBtn() {
    const [state, setState] = React.useState({
      checkedB: true,
    });
  
    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };
  
    return (
      <FormGroup row>
          <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="I agree with SoapBox's chart to respect, exchange, and work with my community."
      />
        </FormGroup>
  );
}
