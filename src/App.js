import './App.css';
import Profile_page from './components/Profile_page';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className = 'app-wrapper'>
        <Header />
        <Navbar />
        <Profile_page />
        <Footer />
    </div>
  );
}

export default App;
