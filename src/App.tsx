import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import Layout from "./components/Layout/Layout.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<HomePage/>}/>
        <Route path="/signin" element={<HomePage/>}/>
        <Route path="/signup" element={<HomePage/>}/>
        <Route path="/" element={<Layout/>}>
          <Route path="admin">
            <Route path="statistic"/>
            <Route path="spaces"/>
          </Route>
          <Route path="user"></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
