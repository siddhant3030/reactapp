const subTotal =
  this.props.cartItems.length > 0
    ? this.props.cartItems.reduce((a, b) => a + parseInt(b.price * b.qty), 0)
    : 0;
const discount = (subTotal * 0.1).toFixed(2);
const vat = (subTotal * 0.1).toFixed(2);
const items =
  this.props.cartItems.length > 0
    ? this.props.cartItems.reduce((a, b) => a + parseInt(b.qty), 0)
    : 0;
const total = (subTotal - discount - vat).toFixed(2);

export default Default;
