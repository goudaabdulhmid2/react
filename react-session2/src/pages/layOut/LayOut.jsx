import Footer from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import {Outlet} from 'react-router-dom'

export default function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <main className="flex-grow-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
