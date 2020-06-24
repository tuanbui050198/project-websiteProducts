import React, { Component } from "react";
import * as text from "../../../constants/text";

class CartResult extends Component {
  render() {
    const { cart } = this.props;
    return (
      <tr>
        <td colSpan="3"></td>
        <td>
          <h4>
            <strong>{text.TXT_TOTAL}</strong>
          </h4>
        </td>
        <td>
          <h4>
            <strong>
              {this.showTotalAmount(cart)}
              {text.TXT_CURRENCY_UNIT}
            </strong>
          </h4>
        </td>
        <td colSpan="3">
          <button
            type="button"
            className="btn btn-primary waves-effect waves-light"
          >
            {text.TXT_PAY}
            <i className="fa fa-angle-right right"></i>
          </button>
        </td>
      </tr>
    );
  }

  showTotalAmount = (cart) => {
    var total = 0;
    if (cart.length > 0) {
      for (var i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
      }
    }
    return total;
  };
}

export default CartResult;
