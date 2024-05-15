import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header';
import Body from './components/Body';
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://reqres.in/api/users?page=1');
      const result = await response.json();
      setData(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <Header fetchData={fetchData} />
      <Body data={data} loading={loading} />
    </div>
  );
}

export default App
