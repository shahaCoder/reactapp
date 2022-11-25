import "./App.scss";
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import PagesTwo from "./pages/PagesTwo";

const App = () => {
	return (
		
			<BrowserRouter>
			   <Routes>
			   <Route path="/about" element={<About />}>
			   </Route>
			   </Routes>
			   <Routes>
			   <Route path="/" element={<PagesTwo />}>
			   </Route>
			   </Routes>
			</BrowserRouter>
		
	);
}

export default App;
