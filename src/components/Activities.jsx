import { Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { getActivities } from '../utils/api';

const Activities = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getActivities().then((activities) => {
      setActivities(activities);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading Winnie's Web App ... </p>;
  } else {
    return (
      <Grid>
        {activities.map((activity) => {
            return (
            <Typography>{activity.location}</Typography>
            )
        })}
      </Grid>
    );
  }
};

export default Activities
