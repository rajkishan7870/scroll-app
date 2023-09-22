import React, {useState, useEffect} from 'react'
import Totalcard from '../../components/Totalcard/Totalcard';
import Loading from '../../components/Loading/Loading';

const Home = () => {
  const [card, setCard] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);


  // Function for fetching api.......

  const getCardData = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
    );
    const data = await res.json();
    console.log(data);


    // Got the data and set to the card (useState)....


    setCard((prev) => [...prev, ...data]);


    // when i got the next data then we have to set  false to the loader....
    
    setLoading(false);
  };

  // we have to call the fetching function in the useEffect bcz it is a side rendering......
  // This useEffect will run when page will updated....

  useEffect(() => {
    getCardData();
  }, [page]);

  //infinite scrolling means------> slider will touch to the bottom .....
  // It means we have to check the condition innerHeight + scrollTop +1 > scrollHeight
  // If this condition will true then update the page--> page+1...

  const handleScroll = async () => {
    // console.log("TotalscrollHeight" + document.documentElement.scrollHeight);
    // console.log("TotalinnerHeight" + window.innerHeight);
    // console.log("scrollTop" + document.documentElement.scrollTop);
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    //Now  we have to apply cleaner function......
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // print total card and loader.....
  // and here I send the data of card using props to the Totalcard Component in the cardData key.....
  // and if loading is true then loading component will rendered otherwise not...
  return (
    <>
      <Totalcard cardData={card} />
      {loading && <Loading/>}
    </>
  );
};

export default Home;