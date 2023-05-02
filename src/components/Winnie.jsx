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
import Welcome from './Welcome';
import { Link } from 'react-router-dom';

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
            <Card key={data.name} className="winnieCard">
              <CardMedia
                className="winnie-image"
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
                <Button variant="contained">
                  <Link className='activities-link' to="/activities">Activity</Link>
                </Button>
              </CardActions>
            </Card>
          );
        })}
        <Welcome />
      </Grid>
    );
  }
};

export default WinnieCard;
