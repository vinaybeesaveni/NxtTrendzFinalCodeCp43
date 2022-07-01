import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let price = 0
      cartList.forEach(each => {
        price += each.price * each.quantity
      })

      return (
        <div className="summary-container">
          <div className="summary-card">
            <h1 className="order-heading">
              Order Total : <span className="order-price">Rs {price}/-</span>
            </h1>
            <p className="items-in-cart">{cartList.length} Items in cart</p>
            <button type="button" className="checkout-button">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
