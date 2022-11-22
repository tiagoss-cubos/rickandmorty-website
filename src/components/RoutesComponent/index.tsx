import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardPerson from "../../pages/CardPerson";
import Home from "../../pages/Home";

export const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Routes>
        <Route path='/cardperson/:id' element={<CardPerson />} />
      </Routes>
    </BrowserRouter>
  );
};
