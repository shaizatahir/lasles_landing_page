import './App.css';
import Features from './components/Features';
import Hero from './components/Hero';
import Navbar from "./components/Navbar"
import PlanCards from './components/PlanCards';
import Location from './components/Location';
import Subscription from './components/Subscription';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <PlanCards />
      <Location />
      <Subscription />
      <Footer />
      
    </div>
  );
}

export default App;
