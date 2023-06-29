import "./styles.css";
import M from "./M.svg";

export default function App() {
  return (
    <div className="App">
      <h1 className="container">404 Error</h1>
      <img src={M} alt="M" className="blurry" />
      <div className="lamp">
        <div className="lava">
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="mblob"></div>
          <div className="blob top"></div>
          <div className="blob bottom"></div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="blurry">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
