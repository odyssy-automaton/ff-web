import "./App.css";

import FfLogo from "./assets/Logo_Fill.png";
import PeachLogo from "./assets/Peach_Logo.png";

console.log("FfLogo", FfLogo);

function App() {
  return (
    <div className="flex flex-col justify-center items-center text-ffTan">
      <img src={FfLogo} width="200px" />
      <h1 className="font-sans text-8xl uppercase">Forgotton</h1>
      <h1 className="font-sans text-8xl mb-8 uppercase">Fruit</h1>

      <p className="text-2xl mb-2 pt-5 border-t-2 border-pink border-ffLightPurple">
        Fermenting
      </p>
      <p className="text-sm mb-10">Coming Winter 2024</p>
      <div className="pt-10 border-t-2 border-pink border-ffLightPurple">
        <a
          href="https://peachtycoon.com/"
          target="_blank"
          className="text-ffLightPurple hover:text-ffPurple"
        >
          <div className="flex flex-row items-start justify-center gap-2 text-sm">
            <p className="leading-7">another digi-edible by</p>

            <img src={PeachLogo} width="20px" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default App;
