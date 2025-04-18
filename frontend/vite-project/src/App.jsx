import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SellerDashboard from './pages/SellerDashboard';
import BuyerDashboard from './pages/BuyerDashboard';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TransactionHistoryPage from './pages/TransactionHistoryPage';
import VoiceSearchPage from './components/VoiceSearchComponent';
import BuyerDashboardPage from './pages/BuyerDashboard';
import SellerDashboardPage from './pages/SellerDashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main App Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/seller-dashboard" element={<SellerDashboard />} />
        <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/transaction-history" element={<TransactionHistoryPage />} />

        {/* Additional Routes */}
        <Route path="/voice-search" element={<VoiceSearchPage />} />
        <Route path="/buyer-dashboard-page" element={<BuyerDashboardPage />} />
        <Route path="/seller-dashboard-page" element={<SellerDashboardPage />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
