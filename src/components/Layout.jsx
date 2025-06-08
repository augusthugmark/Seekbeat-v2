import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="page-background">
      <Header />
      <main className="container">
        {children}
      </main>
      <Footer />
    </div>
  );
}