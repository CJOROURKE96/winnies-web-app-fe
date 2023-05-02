import { useEffect, useState } from 'react';
import { getWinnie } from '../utils/api';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Button
} from '@mui/material';

const WinnieCard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [winnieData, setWinnieData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getWinnie().then((winnie) => {
      setWinnieData(winnie);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading Winnie's Web App ... </p>;
  } else {
    return (
      <Grid
        justifyContent="center"
        alignItems="center"
      >
        {winnieData.map((data) => {
          return (
            <Card key={data.name} className='winnieCard'>
              <CardMedia
                className='winnie-image'
                image={data.image}
                title="Winnie the dog smiling"
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {data.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.location}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant='contained'>Activity</Button>
              </CardActions>
            </Card>
          );
        })}
      </Grid>
    );
  }
};

export default WinnieCard;
