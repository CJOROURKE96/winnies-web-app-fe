import { Button, TextField } from "@mui/material"
import { useState } from "react"
import { postActivity } from "../utils/api"


const AddActivity = (activities, setActivities) => {
    const [newLocation, setNewLocation] = useState('')
    const [newActivity, setNewActivity] = useState('')
    const [newImage, setNewImage] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        postActivity(newLocation, newActivity, newImage).then(({data}) => {
            setActivities([newLocation, newActivity, newImage, ...activities])
        })
        setNewActivity('')
    }

    return (
        <section>
            <form id="new-activity-form" onSubmit={handleSubmit}>
                <TextField placeholder="Location" className="location-text" value={newLocation} onChange={(event) => {
                    setNewLocation(event.target.value)
                }}></TextField>
                <TextField placeholder="Activity" className="activity-text" onSubmit={handleSubmit} value={newActivity} onChange={(event) => {
                    setNewActivity(event.target.value)
                }}></TextField>
                <TextField placeholder="Image URL" className="image-url" onSubmit={handleSubmit} value={newImage} onChange={(event) => {
                    setNewImage(event.target.value)
                }}></TextField>
                <Button type="submit" className="submit-button">Submit</Button>

            </form>
        </section> 
    )
}

export default AddActivity