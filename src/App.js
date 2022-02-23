import {BlogProvider} from "./context/BlogContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import HowMuch from "./Pages/Posts/HowMuch";
import ReverseInteger from "./Pages/Posts/ReverseInteger";
function App() {
  
  return (
    <BlogProvider>
     <Router>
        <div className="flex flex-col overflow-auto z-0 bg-slate-200 justify-between h-screen">
          <Navbar />
          <main className="">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/post/how-much" element={<HowMuch />} />
              <Route path="/post/reverse-integer" element={<ReverseInteger />} />
              <Route path="/*" element={<NotFound />} />

            </Routes>

          </main>

          <Footer />
     </div>
      </Router>

       
        
      </BlogProvider>
  );
}

export default App;
