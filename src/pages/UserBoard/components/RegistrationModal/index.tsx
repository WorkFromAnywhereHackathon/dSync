import { FC, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Typography, Modal } from '@material-ui/core';
import PhoneInput from 'material-ui-phone-number';
import Button from 'components/Button';
import validationSchema from './validation';

import useStyles from './style';

interface IRegistration {
  handleClose: () => {};
  isOpen: boolean;
}

const Registration: FC<IRegistration> = ({ handleClose = () => {}, isOpen = false }) => {
  const classes = useStyles();
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    errors,
    formState: { isSubmitting },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleClick = () => {
    formRef.current?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
  };

  return (
    <Modal open={isOpen} onClose={handleClose} aria-labelledby="registration" aria-describedby="user-registration">
      <div className={classes.root}>
        <Typography className={classes.title} component="h1" variant="h1">
          Ваш телефон
        </Typography>
        <Typography component="p" variant="body1">
          Пожалуйста, укажите код своей страны и введите номер своего телефона.
        </Typography>
        <div className={classes.content}>
          <PhoneInput
            error={!!errors.phoneNumber}
            fullWidth
            name="phoneNumber"
            id="phoneNumber"
            label="Введите номер телефона"
            defaultCountry="by"
            onlyCountries={['by', 'ru', 'ua', 'pl', 'lt', 'ge']}
            variant="outlined"
            disabled={isSubmitting}
            helperText={<span>{errors.phoneNumber?.message}</span>}
            inputProps={{
              ref: register,
            }}
          />
          <Button title="Далее" handleClick={handleClick} />
        </div>
      </div>
    </Modal>
  );
};

export default Registration;
