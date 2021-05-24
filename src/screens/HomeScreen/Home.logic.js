//package import here
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

//local import here
import HomeNavigator from './Home.navigator';

const HomeLogic = () => {
  //package value here
  const { navigator } = HomeLogic.dependencies;
  const { navigation, goBack } = navigator();

  //state value here
  const persistState = useSelector((state) => state.persist);

  //variable value here

  useEffect(() => {
    //function here
  }, [persistState.language]);

  //place your function in here

  return {
    //data props here
    data: {},
    //actions props here
    actions: {
      navigation,
      goBack,
    },
  };
};

export default HomeLogic;

HomeLogic.dependencies = {
  navigator: HomeNavigator,
};
