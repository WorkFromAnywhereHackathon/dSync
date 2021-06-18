import * as React from 'react';
import { useTranslation } from 'react-i18next';
import * as C from 'components/MaterialOverrided';
import useStyles from './style';

const Sidebar: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation('calendar');

  return (
    <div className={classes.wrapper}>
      <C.Button fullWidth variant="contained" color="primary">
        {t('new_event')}
      </C.Button>
      <C.Button fullWidth variant="outlined" color="primary">
        {t('contact_list')}
      </C.Button>
    </div>
  );
};

export default Sidebar;
