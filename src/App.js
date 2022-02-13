import Navbar from "./components/layout/Navbar";
import Header from "./components/layout/Header";
import Showcase from "./components/Showcase"
import {BlogProvider} from "./context/BlogContext"
function App() {
  return (
    <BlogProvider>
  
        <Navbar />
        <main className="bg-slate-900">
          <Header />
          <Showcase />
        </main>
      
   
      </BlogProvider>
  );
}

export default App;
