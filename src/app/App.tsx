import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LandingPage } from './components/LandingPage';
import { ProductListingPage } from './components/ProductListingPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { CartPage } from './components/CartPage';
import { CheckoutPage } from './components/CheckoutPage';
import { UserDashboard } from './components/UserDashboard';
import { AdminDashboard } from './components/AdminDashboard';
import { LoginPage } from './components/LoginPage';
import { SignupPage } from './components/SignupPage';

type Page = 'home' | 'products' | 'product-detail' | 'cart' | 'checkout' | 'dashboard' | 'admin' | 'login' | 'signup';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [cartItemCount] = useState(2);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <LandingPage onNavigate={handleNavigate} />;
      case 'products':
        return <ProductListingPage onNavigate={handleNavigate} />;
      case 'product-detail':
        return <ProductDetailPage />;
      case 'cart':
        return <CartPage onNavigate={handleNavigate} />;
      case 'checkout':
        return <CheckoutPage />;
      case 'dashboard':
        return <UserDashboard />;
      case 'admin':
        return <AdminDashboard />;
      case 'login':
        return <LoginPage onNavigate={handleNavigate} />;
      case 'signup':
        return <SignupPage onNavigate={handleNavigate} />;
      default:
        return <LandingPage onNavigate={handleNavigate} />;
    }
  };

  const showHeaderFooter = currentPage !== 'login' && currentPage !== 'signup';

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#121212]">
      {showHeaderFooter && (
        <Header
          cartItemCount={cartItemCount}
          onNavigate={handleNavigate}
          currentPage={currentPage}
        />
      )}
      <main>{renderPage()}</main>
      {showHeaderFooter && <Footer />}
    </div>
  );
}