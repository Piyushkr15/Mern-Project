import "./App.css"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/LandingPage";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import MyNotes from "./screens/MyNotes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateNote from "./screens/CreateNote";
import SingleNote from "./screens/SingleNote";
import { useState } from "react";

const App = () => {

  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <Header setSearch={setSearch} />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/createnote" element={<CreateNote />} />
          <Route path="/note/:id" element={<SingleNote />} />
          <Route path="/mynotes" element={<MyNotes search={search} />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
};

export default App;
