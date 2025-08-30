import { useEffect, useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [recipes, setRecipes] = useState([]);

  // show result and setShowResults is used for focus and blur the input field
  const [showResult, setShowResults] = useState(false);
  // local caching
  const [cache, setCache] = useState({});

  const fetchDate = async () => {
    try {
      if (cache[input]) {
        console.log("Cache return", input);
        setRecipes(cache[input]);
        return;
      }
      console.log("api is call");
      const data = await fetch(
        "https://dummyjson.com/recipes/search?q=" + input
      );
      const json = await data.json();
      // console.log(json.recipes);
      setRecipes(json?.recipes);
      setCache((prev) => ({ ...prev, [input]: json?.recipes }));
      // console.log("this is menu", recipes);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchDate();
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <div>
      <div className="main">
        <h1>AutoComplete</h1>
        <div>
          <input
            type="text"
            className="search-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            // blur and focus on inupt field
            onFocus={() => setShowResults(true)}
            onBlur={() => setShowResults(false)}
          />
          {showResult && (
            <div className={input.length == 0 ? "zero" : "result-container"}>
              {recipes.map((r) => (
                <span className="result" key={r.id}>
                  {r.name}
                </span>
              ))}
            </div>
          )}
        </div>
        {/* recepices */}
      </div>
    </div>
  );
}

export default App;
