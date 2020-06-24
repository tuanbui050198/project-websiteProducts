import { withStyles } from "@material-ui/core";
import PropTypes from 'prop-types';
import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as taskActions from '../../actions/task';
import "../../App.css";
import DialogForm from "../../components/DialogForm";
import ProductItem from "../../components/ProductItem";
import Search from "../../components/Search";
import styles from "./styles";
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  componentDidMount() {
    const {taskActionCreators} = this.props;
    const {fetchListProduct} = taskActionCreators;
    fetchListProduct();
  }

  renderProducts() {
    const {listProducts}= this.props;
    let xhtml = null;
    xhtml = listProducts.map((product) => {
      return (
        <ProductItem
          product={product}
          key={product.id}
        />
      );
    });
    return <div className="row">{xhtml}</div>;
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  renderForm() {
    const { open } = this.state;
    let xhtml = null;
    xhtml = (
      <DialogForm open={open} onClose={this.handleClose}/>
    );
    return xhtml;
  }

  handeFilter = e => {
    const {value} = e.target;
    const {taskActionCreators} = this.props;
    const {filterProduct} = taskActionCreators;
    filterProduct(value);
  }

  renderSearch() {
    let xhtml = null;
    xhtml = (
      <Search handeChange={this.handeFilter}/>
    );
    return xhtml;
  };

  render() {
    return (
      <div className="container products">
        {this.renderSearch()}
        {this.renderProducts()}
        {this.renderForm()}
      </div>
    );
  }
}

Products.propTypes = {
  taskActionCreators: PropTypes.shape({
    fetchListProduct: PropTypes.func,
    filterProduct: PropTypes.func,
  }),
  listProducts: PropTypes.array,
}

const mapStateToProps = state => {
  return {
    listProducts : state.task.listProducts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    taskActionCreators: bindActionCreators(taskActions, dispatch),
  }
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Products));
