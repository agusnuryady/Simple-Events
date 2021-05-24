//package import here
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

//local import here
import EventsNavigator from './Events.navigator';
import { DATALIST } from '../../constants';

const EventsLogic = () => {
  //package value here
  const { navigator } = EventsLogic.dependencies;
  const { navigation, goBack, goToEventDetailScreen } = navigator();

  //state value here
  const [isList, setIsList] = useState(true);
  const [isSearch, setIsSearch] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [searchEvent, setSearchEvent] = useState('');
  const persistState = useSelector((state) => state.persist);

  //variable value here
  const eventList = DATALIST;

  useEffect(() => {
    //function here
  }, []);

  //place your function in here

  return {
    //data props here
    data: {
      persistState,
      eventList,
      isList,
      isSearch,
      isScrolling,
      searchEvent,
    },
    //actions props here
    actions: {
      navigation,
      goBack,
      setIsList,
      setIsSearch,
      setSearchEvent,
      setIsScrolling,
      goToEventDetailScreen,
    },
  };
};

export default EventsLogic;

EventsLogic.dependencies = {
  navigator: EventsNavigator,
};
