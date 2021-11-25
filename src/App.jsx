import { useState, useEffect } from "react";
import { Routes, Route, Link, Outlet, useParams, useNavigate } from "react-router-dom";
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
        <Route path="goods" element={<GoodsPage />}>
          <Route path=":goodId" element={<GoodDetails />} />
        </Route>

        <Route path="categories" element={<CategoriesPage />} />
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    </div>
  );
}

const GoodDetails = () => {
  const { goodId } = useParams();
  const navigate = useNavigate();

  const [good, setGood] = useState(null);

  const loadGoodDetails = async (id) => {
    try {
      const goodDetails = await api.getGood(id);

      setGood(goodDetails);
    } catch (error) {
      console.dir(error);
      navigate('../');
    }
  }

  useEffect(() => {
    loadGoodDetails(goodId);
  }, [goodId]);

  if (!good) {
    return <p>Loading {goodId} ...</p>
  }

  return (
    <form>
      <input type="text" defaultValue={good.title}/>
      {good.categoryId}
      <select defaultValue={good.categoryId}>
        <option value="">Select Category</option>
      </select>
    </form>
  )
};

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
              <Link to={good.id}>{good.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
        <Outlet />
      </div>
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
