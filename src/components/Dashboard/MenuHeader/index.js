import { withStyles, Button } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ROUTES_PRODUCT } from "../../../constants/Routes";
import styles from "./styles";
import * as text from "../../../constants/text";
import { withRouter } from "react-router-dom";

const menuId = "primary-search-account-menu";

const mobileMenuId = "primary-search-account-menu-mobile";

class MenuHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileMoreAnchorEl: null,
      anchorEl: null,
      txtSearch: "",
    };
  }

  handleProfileMenuOpen = (e) => {
    this.setState({
      mobileMoreAnchorEl: e.currentTarget,
    });
  };

  handleMobileMenuOpen = (e) => {
    this.setState({
      anchorEl: e.currentTarget,
    });
  };

  handleMobileMenuClose = () => {
    this.setState({
      mobileMoreAnchorEl: null,
    });
  };

  renderMobileMenu = () => {
    const { mobileMoreAnchorEl } = this.state;
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    return (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem onClick={this.handleLogout}>
          <IconButton
            aria-label="account of currssent user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
            <p className="txt-profile">{text.TXT_PROFILE}</p>
          
        </MenuItem>
      </Menu>
    );
  };

  handleMenuClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  handleLogout = () => {
    const {history} = this.props;
    if(history) {
      history.push('/login');
    }
  };

  renderMenu = () => {
    const { anchorEl } = this.state;
    const isMenuOpen = Boolean(anchorEl);
    return (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleLogout}>{text.TXT_PROFILE}</MenuItem>
      </Menu>
    );
  };

  handleToggleSidebar = () => {
    const { showSidebar, onToggleSidebar } = this.props;
    if (onToggleSidebar) {
      onToggleSidebar(!showSidebar);
    }
  };

  onhandleChange = (e) => {
    var value = e.target.value;
    this.setState({
      txtSearch: value,
    });
  };

  render() {
    const { classes, name } = this.props;
    const { txtSearch } = this.state;
    return (
      <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleToggleSidebar}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              {name}
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
                value={txtSearch}
                onChange={this.onhandleChange}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge color="secondary">
                  <Link
                    to={ROUTES_PRODUCT[2].path}
                    className={classes.linkCart}
                  >
                    <ShoppingCartIcon className={classes.cartIcon} />
                  </Link>
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle className={classes.profileIcon} />{" "}
                {text.TXT_ACCOUNT}
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {this.renderMobileMenu()}
        {this.renderMenu()}
      </div>
    );
  }
}

MenuHeader.propTypes = {
  classes: PropTypes.object,
  name: PropTypes.string,
  showSidebar: PropTypes.bool,
  onToggleSidebar: PropTypes.func,
  history: PropTypes.object,
};

export default withStyles(styles)(withRouter(MenuHeader));
