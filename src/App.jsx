import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import Layout from "./layout/Layout";
import ModaMixComp from "./components/ModaMixComp";
import Page_Attribution from "./pages/Page_Attribution";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<ModaMixComp/>}/>
            <Route path="/attribution" element={<Page_Attribution/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
