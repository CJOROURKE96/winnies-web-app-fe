import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
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
              <Card key={activity.activity_id} className="activities-card">
                <Typography>{activity.location}</Typography>
                <CardMedia 
                className='activity-image'
                image={activity.image}
                title="Winnie doing an activity"/>
                <CardContent>
                    <Typography>
                        {activity.activity}
                    </Typography>
                </CardContent>
              </Card>
            );
        })}
      </Grid>
    );
  }
};

export default Activities
