import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import * as api from './api';

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
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    api.getGoods()
      .then(goods => {
        setGoods(goods);
      })
  }, []);

  return (
    <div className="goods">
      <div className="sidebar">
        <ul>
          {goods.map(good => (
            <li key={good.id}>
              {good.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="content"></div>
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
