import {BlogProvider} from "./context/BlogContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import HowMuch from "./Pages/Posts/HowMuch";
import ReverseInteger from "./Pages/Posts/ReverseInteger";
import ListUsers from "./Pages/Posts/ListUsers";
import About from "./Pages/About";
import ScrollToTop from "./context/ScrollToTop";
function App() {
  
  return (
    <BlogProvider>
      {/* context provider for the entire site */}

     <Router>
     {/* component that allows for routed pages to scroll directly to the top */}
        <ScrollToTop />

     
        <div className="flex flex-col z-0 bg-slate-200 justify-between h-screen">
          <main className="bg-slate-200 w-full">
            <Navbar />

            <Routes>

              <Route path="/" element={<Home  />} />
              <Route path="/about" element={<About />} />
              <Route path="/post/how-much" element={<HowMuch />} />
              <Route path="/post/reverse-integer" element={<ReverseInteger />} />
              <Route path="/post/list-users" element={<ListUsers />} />
              {/* catch all route, will provide link to go home */}
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
