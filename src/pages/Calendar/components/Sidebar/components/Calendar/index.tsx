import * as React from 'react';
import RCCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import useStyles from './style';

const Calendar: React.FC = () => {
  const classes = useStyles();

  return (
    <RCCalendar
      showNavigation={false}
      className={classes.wrapper}
      defaultValue={moment().toDate()}
      formatShortWeekday={(locale, date) => moment(date).format('ddd')}
    />
  );
};

export default Calendar;
