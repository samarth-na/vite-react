import "./index.css";

import Checkbox from "./components/list";
import { EffectUsed } from "./hooks/useEffect";

function App() {
  return (
    <>
      <div className="flex flex-col gap-10 justify-center items-center">
        <Checkbox />
        <EffectUsed />
      </div>
    </>
  );
}

export default App;
