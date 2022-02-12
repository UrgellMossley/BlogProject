import Navbar from "./components/layout/Navbar";
import Header from "./components/layout/Header";
import Showcase from "./components/Showcase"
function App() {
  return (
    < >
      <Navbar/>
      <main className="bg-slate-900">
        <Header />
        <Showcase/>
      </main>
     
    </>
  );
}

export default App;
