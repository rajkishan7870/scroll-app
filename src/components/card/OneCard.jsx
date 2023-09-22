import React from 'react'
import { Card, CardContent, Typography  } from '@mui/material';

// here got the mydata and onClick from Totalcard component....
// Here destructure the myData and print on the each card..... and Apply onClick eventListener ....

const OneCard = ({myData,onClick}) => {
  const { title, id } = myData;

  

  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {id}
        </Typography>
          <h2 onClick={onClick} style={{cursor : "pointer"}} >{title}</h2>
        </CardContent>
      </Card>
    </div>
  );
};

export default OneCard;