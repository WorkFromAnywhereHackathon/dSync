import { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, CircularProgress } from '@material-ui/core';
import { setVerification } from 'store/auth/actions';
import { RootState } from 'store/reducers';
import Button from 'components/Button';
import Form from './Form';
import useStyles from './style';

const SignIn = () => {
  const classes = useStyles();
  const { t } = useTranslation('auth');
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.auth);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    dispatch(
      setVerification({
        isVerification: false,
      }),
    );
  }, [dispatch]);

  const onSubmit = () => formRef.current?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));

  return (
    <div>
      <Typography className={classes.title} component="h1" variant="h1">
        {t('welcome_title')}
      </Typography>
      <Typography className={classes.hint} component="p" variant="body2">
        {t('phone_hint')}
      </Typography>
      <div className={classes.content}>
        <Form innerRef={formRef} />
        {!loading ? (
          <Button title={t('continue')} onClick={onSubmit} fullWidth color="secondary" />
        ) : (
          <CircularProgress className={classes.loader} />
        )}
      </div>
    </div>
  );
};

export default SignIn;
