import React from 'react';
import  {Routes, Route } from 'react-router-dom'
import JoinUsModal from './Components/home/JoinUsModal';
import NavBar from './Components/home/NavBar';
import NewsPage from './Components/admin/NewsPage';
import SportNewPage from './Components/admin/SportNewPage';
import UniversityNewPage from './Components/admin/UniversityNewPage';


function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Routes>
        <Route path="/sport" element={<SportNewPage/>}></Route>
        <Route path="/university" element={<UniversityNewPage/>}></Route>
        <Route path="/" element={<NewsPage/>}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
