import { useEffect, useState } from 'react';
import { getWinnie } from '../utils/api';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { Button } from '@mui/base';

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
        spacing={3}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        {winnieData.map((data) => {
          return (
            <Card sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                sx={{ pt: '56.25%' }}
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
                <Button size="small">Activity</Button>
              </CardActions>
            </Card>
          );
        })}
      </Grid>
    );
  }
};

export default WinnieCard;
