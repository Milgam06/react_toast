import { PracToast } from "./pages/Toast/Prac_Toast";
import { Routes, Route } from "react-router-dom";
import { ChoicePage } from "./pages/Choice/choice";

export const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ChoicePage />} />
        <Route path="/toast" element={<PracToast />} />
      </Routes>
    </>
  );
};

export default App;
