import React, {useState} from 'react';
import box from "../../images/box.png";
import {connect} from "react-redux";
import {updateCart} from "../../store/actions/mainActions";

const CartItem = props => {

    const [count, setCount] = useState(props.count);

    const renderHandler = data => {
        setCount(data);

        props.updateCart({
            name: props.name,
            contentFirst: props.contentFirst,
            contentSecond: props.contentSecond,
            price: props.price,
            count: data,
        }, [...props.cart])
    };

  return (
      <div className="flex productcart">
          <div className="item foto">
              <img src={box} alt={'img'}/>
          </div>
          <div className="item wide">
              <h2>{props.name}</h2>
              <div className="orderline flex">
                  <div className="item quant wide">
                      {(count < 1) ?
                          <button className="button --outline" disabled>-</button> :
                          <button className="button --outline" onClick={() => renderHandler(count - 1)}>-</button>
                      }
                      <input className="orderq" type="text" value={count} />
                      <button className="button --outline" onClick={() => renderHandler(count + 1)}>+</button>
                  </div>
                  <div className="item price">€{props.price * count}</div>
              </div>
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
        updateCart: (data, cart) => dispatch(updateCart(data, cart))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);