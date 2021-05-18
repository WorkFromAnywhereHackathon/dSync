import { useTranslation } from 'react-i18next';
import { Form as FormType } from 'types';
import { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { setLoggedIn } from 'store/auth/actions';
import { IconButton, InputAdornment, InputLabel, FormControl, Input, Box, Typography } from '@material-ui/core';
import { RootState } from 'store/reducers';
import { yupResolver } from '@hookform/resolvers/yup';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import useStyles from './style';

import validationSchema from './validation';

interface State {
  showPassword: boolean;
}

interface Values {
  email: string;
  password: string;
}

const Login: FC<FormType> = ({ innerRef }) => {
  const classes = useStyles();
  const { t } = useTranslation('auth');
  const dispatch = useDispatch();
  const { errorMessage } = useSelector((state: RootState) => state.auth);
  const history = useHistory();
  const [values, setValues] = useState<State>({
    showPassword: false,
  });
  const {
    register,
    handleSubmit,
    errors,
    formState: { isSubmitting },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const onSubmit = (formValues: Values) => {
    dispatch(
      setLoggedIn.request({
        ...formValues,
        clb: () => history.push('/users'),
      }),
    );
  };

  return (
    <Box>
      <form ref={innerRef} onSubmit={handleSubmit(onSubmit)}>
        <Typography className={classes.error}>{errorMessage}</Typography>
        <FormControl>
          <InputLabel className={classes.label} htmlFor="email">
            {t('email_address')}
          </InputLabel>
          <Input
            error={!!errors.email}
            className={classes.input}
            id="email"
            name="email"
            placeholder="email"
            inputRef={register}
            disabled={isSubmitting}
          />
          <span className={classes.error}>{errors.email?.message}</span>
        </FormControl>
        <FormControl>
          <InputLabel className={classes.label} htmlFor="password">
            {t('password')}
          </InputLabel>
          <Input
            error={!!errors.passord}
            className={classes.input}
            id="password"
            name="password"
            type={values.showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? (
                    <VisibilityIcon style={{ color: '#BDBDBD' }} />
                  ) : (
                    <VisibilityOffIcon style={{ color: '#BDBDBD' }} />
                  )}
                </IconButton>
              </InputAdornment>
            }
            inputRef={register}
            disabled={isSubmitting}
          />
          <span className={classes.error}>{errors.password?.message}</span>
        </FormControl>
      </form>
    </Box>
  );
};

export default Login;
