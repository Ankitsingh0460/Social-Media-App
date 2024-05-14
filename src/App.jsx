import Header from './component/Header'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from './component/Sidebar';
import Footer from './component/Footer';
import Content from './component/Content';
import Postlist from './component/Postlist';
import { useState } from 'react';
import PostListProvider from './store/Post-list-store';
import LoadingScreen from './component/LoadingScreen';

function App() {
  const [selectedTab, setSelectedTab] = useState("Home")


  return (
    <PostListProvider>
      <div className='mainDiv'>
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
        <div className='content'>
          <Header></Header>

          {selectedTab === "Home" ? (<Postlist></Postlist>) : (<Content></Content>)}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>



  )
}

export default App
