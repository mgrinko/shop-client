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
    loadGoods();
  }, []);

  const loadGoods = async () => {
    const goodsFromServer = await api.getGoods();

    setGoods(goodsFromServer);
  }

  const addGood = async () => {
    await api.addGood({
      title: `Good ${new Date().toLocaleTimeString()}`,
      categoryId: '123',
    });
      
    loadGoods();
  };

  return (
    <div className="goods">
      <div className="sidebar">
        <button onClick={addGood}>Add</button>

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
