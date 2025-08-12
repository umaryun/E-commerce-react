import  Sidebar  from "./components/Sidebar"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import MainContent from "./components/MainContent"
import ProductPage from "./components/ProductPage";
import PopularBlogs from "./components/PopularBlogs";
import TopSellers from "./components/TopSellers";

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />

        <div className="rounded w-full flex justify-center flex-wrap">

          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
        </div>

        <div>
          <TopSellers />
          <PopularBlogs />
        </div>


      </div>
    </Router>
  )
}

export default App
