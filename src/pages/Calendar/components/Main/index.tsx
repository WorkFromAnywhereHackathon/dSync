import * as React from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Toolbar } from './components';
import useStyles from './style';

const events: any[] = [];
const calendarLocalizer = momentLocalizer(moment);

const Main: React.FC = () => {
  const classes = useStyles();

  return (
    <Calendar
      popup={false}
      className={classes.calendar}
      events={events}
      defaultDate={moment().toDate()}
      localizer={calendarLocalizer}
      components={{ toolbar: Toolbar }}
    />
  );
};

export default Main;
