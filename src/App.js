import './App.css';
import ListIcon from '@mui/icons-material/List';
import HomeIcon from '@mui/icons-material/Home';
import {
  BrowserRouter,
  Route,
  Link,
  Routes
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div class='app'>
        <Head />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Head() {
  return (
    <div style={{ backgroundColor: "burlywood" }}
      className="head">
      <div className='menu'>
        <ListIcon sx={{
          width: 40,
          height: 40,
          color: 'seashell'
        }} />
      </div>
      <div className='title'>
        <h1>My Website</h1>
      </div>
      <div className='home'>
        <Link to='/'>
          <HomeIcon sx={{
            width: 40,
            height: 40,
            color: 'seashell'
          }} />
        </Link>
      </div>
    </div>
  )
}

function Home() {
  return (
    <div style={{ backgroundColor: "bisque" }}
      className="body">
      <p>This is the Body</p>
    </div>
  )
}

export default App;
