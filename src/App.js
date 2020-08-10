import React,{ useState, useEffect } from 'react';
import Header from './components/header'
import Table from './components/table'
import { getOrderDetails } from './services';

function App() {
  const [data, setData] = useState({});

  const getData=()=>{
    getOrderDetails()
    .then(({data}) => {
      setData(data)
    })
    .catch((error) => {
      console.log(error.message);
    });
  }

  useEffect(()=>{
    getData()
  },[])

  return (
        <>
          <Header />
          <main>
            <Table  data={data} />
          </main> 
        </>
  );
}

export default App;
