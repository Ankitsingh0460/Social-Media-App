import Header from './component/Header'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from './component/Sidebar';
import Footer from './component/Footer';
import Content from './component/Content';
import Postlist from './component/Postlist';
import { useState } from 'react';

function App() {
  const [selectedTab, setSelectedTab] = useState("Create Post")

  return (
    <div className='mainDiv'>
      <Sidebar selectedTab={selectedTab}></Sidebar>
      <div className='content'>
        <Header></Header>
        {selectedTab === "Home" ? (<Postlist></Postlist>) : (<Content></Content>)}
        <Footer></Footer>
      </div>
    </div>




  )
}

export default App
