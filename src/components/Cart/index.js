import React, { Component } from "react";
import * as text from "../../constants/text";

class Cart extends Component {
  render() {
    const { children } = this.props;
    return (
      <section className="section cart">
        <div className="table-responsive">
          <table className="table product-table">
            <thead>
              <tr>
                <th></th>
                <th>{text.TXT_PRODUCT}</th>
                <th>{text.TXT_PRICE}</th>
                <th>{text.TXT_QUANTITY}</th>
                <th>{text.TXT_TOTAL_PRICE}</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{children}</tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default Cart;
