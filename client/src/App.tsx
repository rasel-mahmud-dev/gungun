import {useEffect, useState} from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";
import Navigation from "./components/navigation/Navigation";
import HomePage from "./pages/homePage/HomePage";
import Player from "./components/player/Player";
import LoginPage from "./pages/login/LoginPage";
import {Router, Routes, Route} from "react-router-dom"
import {loginWihToken} from "./store/actions/userAction";
import useStore from "./store/useStore";
import AddSong from "./pages/admin/AddSong";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ArtistList from "./pages/admin/ArtistList";
import SongList from "./pages/admin/SongList";
import DashboardHome from "./pages/admin/DashboardHome";
import Artists from "./pages/artists/Artists";
import Footer from "./components/footer/Footer";
import SongDetail from "./pages/songDetail/SongDetail";

function App() {
  const [count, setCount] = useState(0);
    const [_, dispatch]  = useStore();
  
  useEffect(()=>{
      loginWihToken(dispatch)
  }, [])
  
  return (
    <div className="App">
      <Navigation />
      <Routes>
        
        <Route path="/auth/login" element={ <LoginPage />} />
        
        <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminDashboard />} >
            <Route path="dashboard" element={<DashboardHome />} />
            <Route path="add-song" element={<AddSong />} />
            <Route path="update-song/:id" element={<AddSong />} />
            <Route path="songs" element={<SongList />} />
            <Route path="artist" element={<ArtistList />} />
          </Route>
          <Route path="/artists" element={<Artists />} />
          <Route path="/song/:title" element={<SongDetail />} />
  
        </Routes>
        <Footer />
        <Player />
        
    </div>
  );
}

export default App;
