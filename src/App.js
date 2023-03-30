import React, { useEffect, useState } from "react";
import Navbar from "../src/components/Navbar"
import Filter from "../src/components/Filter"
import Cards from "../src/components/Cards"
import { apiUrl } from './data'
import Spinner from "./components/Spinner";
import axios from 'axios';
import { toast } from 'react-toastify'


const App = () => {

  const [load, setLoad] = useState(false)

  const [data, setData] = useState({})

  const getData = async () => {
    try {
      let options = {
        url: apiUrl,
        method: "get"
      }
      const result = await axios(options)
      setData(result.data)
      setLoad(true)
    }
    catch (err) {
      toast.error("error in api call")
    }
  }


  const [title,setTitle]=useState("All")

  function filter(title) {
    setTitle(title)
  }


  useEffect(() => {
    getData()
  }, [])

  return (<div className="wrapper">
    <Navbar />
    <Filter fn={filter} />
    {load ? <Cards details={data} title={title}/> : <Spinner />}
  </div>);
};

export default App;
