import { Route, Routes } from "react-router-dom";
import { Login, Header } from "./components";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<> <Header /> <Login /></>} />
      </Routes>
    </div>
  )
};

export default App;
