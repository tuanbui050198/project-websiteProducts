import React, { Component } from "react";
import { withStyles, TextField } from "@material-ui/core";
import styles from "./styles";
import PropTypes from "prop-types";
import * as text from '../../constants/text';

class Search extends Component {
  render() {
    const { classes, handeChange } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          className={classes.textField}
          onChange={handeChange}
          margin="normal"
          autoComplete='off'
          placeholder={text.TXT_INPUT}
        />
      </form>
    );
  }
}

Search.propTypes = {
  classes: PropTypes.object,
  handeChange: PropTypes.func,
};

export default withStyles(styles)(Search);
