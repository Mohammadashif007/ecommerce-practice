import {useState, useEffect} from 'react';
const Shops = () => {
   const [shop, setShop] = useState([]);
   const url = 'data.json';
   const loadData = async() => {
    const data = await fetch(url);
    const res = await data.json();
    setShop(res)
   }


   useEffect(() => {
    loadData();
   }, [])
   
   console.log(shop);

    return (
        <div>
            
        </div>
    );
};

export default Shops;