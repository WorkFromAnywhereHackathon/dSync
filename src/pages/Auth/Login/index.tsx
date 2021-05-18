import { useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import Button from 'components/Button';
import Form from './Form';
import useStyles from './style';

const Login = () => {
  const classes = useStyles();
  const { t } = useTranslation('auth');
  const formRef = useRef<HTMLFormElement>(null);

  const handleClick = () => {
    formRef.current?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
  };

  return (
    <div>
      <Typography className={classes.title} component="h1" variant="h1">
        {t('login_title')}
      </Typography>
      <div className={classes.content}>
        <Form innerRef={formRef} />
        <RouterLink className={classes.forgot} to="/auth/forgot">
          {t('forgot')}
        </RouterLink>
        <Button title="login" handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Login;
