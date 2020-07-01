import React, { Component } from "react";
import {
  withStyles,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import styles from "./styles";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as text from "../../constants/text";
import { ROUTES_LOGIN, ROUTES_PRODUCT } from "../../constants/Routes";

class LoginPage extends Component {
  onLogin = () => {
    const { history } = this.props;
    if (history) {
      history.push(ROUTES_PRODUCT[0].path);
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.loginPage}>
        <Card>
          <CardContent>
            <form>
              <div className="text-title">
                <Typography variant="caption" className="text-title-login">
                  {text.TXT_LOGIN_TO_CONTINUE}
                </Typography>
              </div>
              <TextField
                id="email"
                label="Email"
                className={classes.TextField}
                fullWidth
                margin="normal"
              />
              <TextField
                id="password"
                label="Password"
                className={classes.TextField}
                type="password"
                fullWidth
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
                onClick={this.onLogin}
              >
                {text.TXT_LOGIN}
              </Button>
              <div className="link-register">
                <Link to={ROUTES_LOGIN[1].path}>
                  <Button className="mt-10">{text.TXT_REGISTER_ACCOUNT}</Button>
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(LoginPage);
