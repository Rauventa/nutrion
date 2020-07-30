import React, {useState} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {addToCart} from "../../store/actions/mainActions";

const CatalogItem = props => {

    const [count, setCount] = useState(1);

    const cartHandler = () => {
        props.addToCart({
            name: props.name,
            contentFirst: props.contentFirst,
            contentSecond: props.contentSecond,
            price: props.price,
            count
        }, [...props.cart]);
    };

  return (
      <div className="orderline flex">
          <div className="item price">€{props.price * count}</div>
          <div className="item desc wide">Protein, box of 12 sachets</div>
          <div className="item quant">
              {(count < 2) ?
                  <button className="button --outline" disabled>-</button> :
                  <button className="button --outline" onClick={() => setCount(count - 1)}>-</button>
              }
              <input className="orderq" type="text" value={count} />
              <button className="button --outline" onClick={() => setCount(count + 1)}>+</button>
          </div>
          <div className="item submit">
              <button className="button" onClick={cartHandler}>add to cart</button>
          </div>
      </div>
  )
};

function mapStateToProps(state) {
    return {
        cart: state.mainReducer.cart
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addToCart: (data, cart) => dispatch(addToCart(data, cart))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CatalogItem));