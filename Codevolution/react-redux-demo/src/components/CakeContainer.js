import { connect } from "react-redux";

import { buyCake } from "../redux";

function CakeContainer(props) {
  return (
    <>
      <h2>Number of cakes: {props.numbOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
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
    buyCake: () => {
      return dispatch(buyCake());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
