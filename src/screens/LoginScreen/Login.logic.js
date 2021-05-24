//package import here
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUsername } from '../../redux/redux-actions/user';

//local import here
import LoginNavigator from './Login.navigator';

const LoginLogic = () => {
  //package value here
  const { navigator } = LoginLogic.dependencies;
  const { navigation } = navigator();
  const dispatch = useDispatch();

  //state value here
  const [name, setName] = useState('');

  //variable value here

  useEffect(() => {
    //function here
  }, []);

  //place your function in here
  const _handleLogin = useCallback(() => {
    if (name.length) {
      dispatch(setUsername(name, navigation));
    }
  }, [dispatch, name, navigation]);

  return {
    //data props here
    data: {
      name,
    },
    //actions props here
    actions: {
      setName,
      _handleLogin,
    },
  };
};

export default LoginLogic;

LoginLogic.dependencies = {
  navigator: LoginNavigator,
};
