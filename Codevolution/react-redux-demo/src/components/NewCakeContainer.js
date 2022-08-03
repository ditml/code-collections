import { connect } from "react-redux";
import { useState } from "react";

import { buyCake } from "../redux";

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);

  return (
    <>
      <h2>Number of cakes: {props.numbOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      ></input>
      <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    numbOfCakes: state.cake.numbOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => {
      return dispatch(buyCake(number));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
