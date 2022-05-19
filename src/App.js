import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashbordmt from './components/Dashbordmt';




function App() {
  return (
    <>
      <div className='warper-body'>
      <header >
        <Navbar />
      </header>
      <main className='py-5'>
        <div className='container-fluid g-0'>
        <div className='row'>
      <div className='col-md-auto '> <Sidebar /> </div>
      <div className='col dashbod-container p-5 h-100'>  <Dashbordmt /> </div> 
    </div>
     </div>
    
      </main>
      </div>
      
      <footer className='p3 text-center'>
        <h3>Footer Section</h3>
        CopyRight
      </footer>
    </>
  );
}

export default App;
