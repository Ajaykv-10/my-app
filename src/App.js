import { useEffect, useState } from "react";
import "./App.css";
import { Content } from "./Content";
import { LOADER_STATUS } from "./constant";
function App() {
  const [loaderStatus, setLoaderStatus] = useState(LOADER_STATUS.LOADING);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits"
        );
        if (res.ok) {
          setLoaderStatus(LOADER_STATUS.LOADED);
          const result = res.json();
        }
      } catch (err) {
        setLoaderStatus(LOADER_STATUS.ERROR);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {loaderStatus === LOADER_STATUS.LOADING && <h3>Loading...</h3>}
      {loaderStatus === LOADER_STATUS.LOADED && <Content />}
      {loaderStatus === LOADER_STATUS.ERROR && (
        <h3>Error While fetching data</h3>
      )}
    </>
  );
}

export default App;
