import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { ToolbarProps as CalendarToolbarProps, View } from 'react-big-calendar';
import { IconButton, Typography, RadioGroup, Radio, FormControlLabel } from '@material-ui/core';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import useStyles from './style';

const Toolbar: React.FC<CalendarToolbarProps> = ({ label, view, onView, onNavigate }) => {
  const { t } = useTranslation('calendar');
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.date}>
        <Typography variant="h5">{label}</Typography>
        <div className={classes.dateControls}>
          <IconButton size="small" onClick={() => onNavigate('PREV')}>
            <ChevronLeft />
          </IconButton>
          <IconButton size="small" onClick={() => onNavigate('NEXT')}>
            <ChevronRight />
          </IconButton>
        </div>
      </div>
      <div className={classes.actions}>
        <RadioGroup row name="view" onChange={event => onView(event.target.value as View)} value={view}>
          <FormControlLabel label={t('day')} value="day" control={<Radio />} />
          <FormControlLabel label={t('week')} value="week" control={<Radio />} />
          <FormControlLabel label={t('month')} value="month" control={<Radio />} />
        </RadioGroup>
      </div>
    </div>
  );
};

export default Toolbar;
