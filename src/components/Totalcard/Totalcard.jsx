import React from 'react'
import OneCard from '../card/OneCard';
import { useNavigate } from 'react-router-dom';

// Got the cardData from Home Component...
// Here destructure the cardData and mapped total card and all the data sent to the Card component using props in the myData key

const Totalcard = ({ cardData }) => {

    const navigate = useNavigate();
    

    // In the handleClick function I send the data to the DEscription component 

    function handleClick(data) {
        // console.log(data)

        navigate(`/descp/${data.body}`)
    }

    // handleClick function will go to the OneCard component using props in the onClick key.

    return (
        <div >
          <div >
            <h1>List of Cards</h1>
            <div >
              {cardData.map((data, id) => {
                return <OneCard onClick={()=>handleClick(data)} key={id} myData={data} />;
              })}
            </div>
          </div>
        </div>
      );
    };

export default Totalcard;