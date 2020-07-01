import React, { Component } from "react";
import {
  withStyles,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import styles from "./styles";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ROUTES_LOGIN } from "../../constants/Routes";
import * as text from "../../constants/text";

class RegisterPage extends Component {
  onMoveToLogin = () => {
    const { history } = this.props;
    if (history) {
      history.push(ROUTES_LOGIN[0].path);
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.backgroundLogin}>
        <div className={classes.registerPage}>
          <Card>
            <CardContent>
              <form>
                <div className="text-title">
                  <Typography variant="caption" className="text-title-login">
                    {text.TXT_REGISTER_ACCOUNT}
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
                <TextField
                  id="cpassword"
                  label="Confirm Password"
                  className={classes.TextField}
                  type="password"
                  fullWidth
                  margin="normal"
                />
                <FormControlLabel
                  control={<Checkbox value="agree" />}
                  label={text.TXT_AGREE_TERMS}
                  className="check-terms"
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                  onClick={this.onMoveToLogin}
                >
                  {text.TXT_REGISTER}
                </Button>
                <div className="link-register">
                  <Link to={ROUTES_LOGIN[0].path}>
                    <Button className="mt-10">{text.TXT_HAVE_ACCOUNT}</Button>
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

RegisterPage.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(RegisterPage);
