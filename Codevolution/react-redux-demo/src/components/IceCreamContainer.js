import { connect } from "react-redux";

import { buyIceCream } from "../redux";

function IceCreamContainer(props) {
  return (
    <>
      <h2>Number of Ice Creams: {props.numbOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy Ice Cream</button>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    numbOfIceCreams: state.iceCream.numbOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => {
      return dispatch(buyIceCream());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
