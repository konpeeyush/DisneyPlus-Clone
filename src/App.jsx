import { Route, Routes } from "react-router-dom";
import { Login, Header, Home, Detail } from "./components";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<> <Header /> <Login /></>} />
        <Route path="/home" element={<> <Header />  <Home /> </>} />
        <Route path='/detail/:id' element={<> <Header /> <Detail /> </>} />
      </Routes>
    </div>
  )
};

export default App;
