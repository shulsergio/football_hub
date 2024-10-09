import css from "./Loader.module.css";
import { RotatingLines } from "react-loader-spinner";

const Loader: React.FC=()=> {
  return (
  <div className={css.loaderOverlay}>  
      <RotatingLines
      visible={true}
      // height={96}
      width="96"
      strokeColor="Green" 
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      />
      </div>
  );
}
export default Loader;
