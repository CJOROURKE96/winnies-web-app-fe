import { Button, Grid, TextField } from '@mui/material';
import { useState } from 'react';
import { postActivity } from '../utils/api';

const AddActivity = (activities, setActivities) => {
  const [newLocation, setNewLocation] = useState('');
  const [newActivity, setNewActivity] = useState('');
  const [newImage, setNewImage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    postActivity(newLocation, newActivity, newImage).then(({ data }) => {
      setActivities([newLocation, newActivity, newImage, ...activities]);
    });
    setNewActivity('');
  };

  return (
    <Grid className="new-activity-form-grid">
      <form className="new-activity-form" onSubmit={handleSubmit}>
        <div className='new-location'>
          <TextField
            placeholder="Location"
            className="location-input"
            required
            type='text'
            value={newLocation}
            onChange={(event) => {
              setNewLocation(event.target.value);
            }}
          ></TextField>
        </div>
        <div className='new-activity'>
          <TextField
            placeholder="Activity"
            className="activity-input"
            required
            multiline
            autoComplete='off'
            onSubmit={handleSubmit}
            value={newActivity}
            onChange={(event) => {
              setNewActivity(event.target.value);
            }}
          ></TextField>
        </div>
        <div className='new-image-URL'>
          <TextField
            placeholder="Image URL"
            className="image-URL"
            required
            onSubmit={handleSubmit}
            value={newImage}
            onChange={(event) => {
              setNewImage(event.target.value);
            }}
          ></TextField>
        </div>
        <Button type="submit" className="submit-button" variant='contained'>
          Submit
        </Button>
      </form>
    </Grid>
  );
};

export default AddActivity;
