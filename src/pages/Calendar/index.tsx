import * as React from 'react';
import { Sidebar, Main } from './components';
import useStyles from './style';

const Calendar: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Sidebar />
      <Main />
    </div>
  );
};

export default Calendar;
