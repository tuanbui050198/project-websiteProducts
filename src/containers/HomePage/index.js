import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import Breadcrumb from "../../components/Home/Breadcrumb";
import Recommend from "../../components/Home/Recommend";

class HomePage extends Component {
  render() {
    const { classes } = this.props;
    
    return (
      <div className={classes.homePage}>
        <Breadcrumb />
        <Recommend />
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);
