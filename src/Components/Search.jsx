import { Divider, Input } from 'antd';
import { useState } from "react";
import '../App.css';

function Search({searchFood}) {

    const [search, setSearch] = useState("");
    const searchFoodHandler = (e) => {
        setSearch(e.target.value)
        searchFood(search)
    }

  return (
    <>

        <Divider>Search</Divider>

        <label htmlFor="search">Search</label>
        <Input value={undefined} type="text" onChange={searchFoodHandler} />
    </>
  );
}

export default Search;