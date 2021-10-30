import Axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";

function App() {
  const [search, setSearch] = useState("chicken");

  const [recipes, setRecipes] = useState([]);

  const APP_ID = "d74416b1";
  const APP_KEY = "518fd2ae373ede4951f5d4f979bec185";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const result = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    console.log(result);
    setRecipes(result.data.hits);
  };

  const onInputChange = (e) => {
    setSearch(e.target.value);
  };

  const onSearchClick = () => {
    getRecipes();
  };

  return (
    <div className='App'>
      <Header
        search={search}
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
      />
      <div className='container'>
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
}

export default App;
