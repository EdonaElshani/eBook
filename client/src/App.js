import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DisplayAll from "./components/DisplayAll";
import BookForm from "./components/BookForm";
import NotFound from "./components/NotFound";
import EditBook from "./components/EditBook";
import Details from "./components/Details";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<DisplayAll />} />
          <Route path="/new" element={<BookForm />} />
          <Route path="/NotFound" element={<NotFound />} />
          <Route path="/edit/:id" element={<EditBook />} />
          <Route path="/details/:id" element={<Details/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
