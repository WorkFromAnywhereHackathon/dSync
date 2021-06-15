import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLoggedOut } from 'store/auth/actions';
import { useShallowEqualSelector } from 'hooks';
import { Paper, Typography, Card, CardHeader, CardContent, Avatar } from '@material-ui/core';
import { Auth } from 'store/types.d';
import Button from 'components/Button';

import useStyles from './style';

const Booking = () => {
  const classes = useStyles();
  const { firstName, lastName } = useShallowEqualSelector((state: Auth) => state);

  return (
    <div className={classes.root}>
      <Typography className={classes.title} component="h1" align="center">
        Запись на услугу
      </Typography>
      <Paper className={classes.paper} variant="outlined">
        <Card>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                {firstName?.charAt(0) || 'A'}
              </Avatar>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              <b>Автомойка</b> Минск
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    </div>
  );
};

export default Booking;
