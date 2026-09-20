import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import History from "./pages/History";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/history" element={<History />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App