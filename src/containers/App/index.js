import React, { Component } from "react";
import { withStyles, ThemeProvider, CssBaseline } from "@material-ui/core";
import styles from "./styles";
import configureStore from "../../redux/configureStore";
import { Provider } from "react-redux";
import theme from "../../commons/Theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../components/Loading";
import { BrowserRouter, Switch } from "react-router-dom";
import {ROUTES_PRODUCT} from '../../constants/index';
import LayoutRoute from "../../commons/Layout/LayoutRoute";
import "../../App.css";
import Footer from "../Footer";

const store = configureStore();

class App extends Component {

  renderRoutesProduct() {
    let xhtml = null;
    xhtml = ROUTES_PRODUCT.map((route) => {
      return (
        <LayoutRoute 
          key = {route.path}
          path={route.path}
          component = {route.component}
          name={route.name}
          exact={route.exact}
        />
      );
    })
    return xhtml;
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ToastContainer />
            <Loading />
            <Switch>
              {this.renderRoutesProduct()}
            </Switch>
          </ThemeProvider>
        </BrowserRouter>
        <Footer />
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
