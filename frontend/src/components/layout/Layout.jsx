import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: "#f8f9fa" }}>
      <Header />

      <main className="flex-grow-1 d-flex justify-content-center py-4">
        <div className="w-100" style={{ maxWidth: "1200px" }}>
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}
