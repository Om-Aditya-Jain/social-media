import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Home from "pages/home";
import Login from "pages/login";
import Profile from "pages/profile";
import "./App.css";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/home" element={<Home />} />
					<Route path="/profile/:userId" element={<Profile />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
