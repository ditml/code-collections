import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

function HooksCakeContainer() {
  const numbOfCakes = useSelector((state) => state.cake.numbOfCakes);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Number of cakes: {numbOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </>
  );
}

export default HooksCakeContainer;
