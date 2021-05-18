import { shallowEqual, useSelector } from 'react-redux';
import { Auth } from 'store/types.d';

export const useShallowEqualSelector = (selector: (state: Auth) => typeof state) => useSelector(selector, shallowEqual);
