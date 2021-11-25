import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/goods">Goods</Link>
        {' '}
        <Link to="/categories">Categories</Link>
      </nav>

      <Routes>
        <Route path="goods" element={<GoodsPage />} />
        <Route path="categories" element={<CategoriesPage />} />
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    </div>
  );
}

const GoodsPage = () => {
  return (
    <div className="goods">
      Goods page
    </div>
  )
}

const CategoriesPage = () => {
  return (
    <div className="goods">
      Categories page
    </div>
  )
}

export default App;
