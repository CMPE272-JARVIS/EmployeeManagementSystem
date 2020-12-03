import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export default function HR(props) {
  return (
    <div className="mainContainerWrap">
      <Grid container  spacing={2}>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <h1>All Employee Directory</h1>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>    
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <h1>Manage Departments</h1>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>    
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <h1>Pay</h1>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>    
        </Grid>

      <Grid item xs={12} md={3}>
        <Card>
          <CardContent>
            <h1>Recruitment & Selection</h1>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>    
      </Grid>
    </Grid>
  </div>
  );
}
