import { useSelector } from "react-redux";

const useMakkalId = () => {
  const { makkalId } = useSelector((state) => state.loginReducer);
  return makkalId;
};

export default useMakkalId;
