import { useDispatch } from 'react-redux';
import { setLoggedOut } from 'store/auth/actions';
import { useShallowEqualSelector } from 'hooks';
import { Auth } from 'store/types.d';
import Button from '../../components/Button';

const Users = () => {
  const { firstName, lastName } = useShallowEqualSelector((state: Auth) => state);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setLoggedOut.request());
  };
  return (
    <>
      <div>Users Page</div>
      <span>{firstName}</span>
      <span>{lastName}</span>
      <Button title="Log out" onClick={handleClick} />
    </>
  );
};

export default Users;
