import Home from "./Home";
import Page2 from "./Page2";
import Page1 from "./Page1";
import {BrowserRouter,  Routes, Route,Link} from 'react-router-dom'
function App() {
  return(
    <div className="App" style={{margin:0,padding:0,boxSizing:"border-box"}}>
      <BrowserRouter>
      <header style={{backgroundColor:"grey",position:"relative",padding:40,textAlign:"center",border:2,borderRadius:20 }}>
        <Link style={{color:"white"}} to='/'>{<h1>Home</h1>}</Link>
        <Link style={{color:"white"}} to='/page1'>{<h1>Page1</h1>}</Link>
     
      </header>
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/page1" element={<Page1/>}/>

      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
