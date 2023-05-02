import { Grid, Typography } from "@mui/material";

const Welcome = () => {
    return (
      <Grid>
        <Typography className="text-box" variant="subtitle1">
          This is a web app set up for Hanna & Lewis to keep track of Winnie's
          adventures while they're away in Italy for their wedding!
        </Typography>
        <Typography className="text-box" variant="subtitle1">
          Enjoy your wedding! Winnie will see you when you're back as husband &
          wife!
        </Typography>
      </Grid>
    );
}

export default Welcome