import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';


function App() {
  return (
    <>
      <div className='warper-body'>
      <header >
        <Navbar />
      </header>
      
      <main className='py-5'>
        <div className='container-fluid g-0'>
          <Body />
        </div>
      </main>
      </div>
      
      <footer>
        Footer
      </footer>
    </>
  );
}

export default App;
