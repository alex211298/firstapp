import './App.css';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className='app-wrapper' >
            <Header />
            <Navbar />
            <Profile />
            <Footer />
        </div>
    );
}

export default App;