//package import here
import { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEvents, saveEvents } from '../../redux/redux-actions';

//local import here
import EventDetailNavigator from './EventDetail.navigator';

const EventDetailLogic = () => {
  //package value here
  const { navigator } = EventDetailLogic.dependencies;
  const { goBack } = navigator();
  const dispatch = useDispatch();

  //state value here
  const [modalDelete, setModalDelete] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const userState = useSelector((state) => state.user);

  //variable value here

  useEffect(() => {
    //function here
  }, []);

  //place your function in here
  const _joinEvent = useCallback(
    (item) => {
      dispatch(saveEvents(item));
      setAlertSuccess(true);
    },
    [dispatch]
  );

  const _handDeleteEvent = useCallback(
    (id) => {
      dispatch(deleteEvents(id));
      setModalDelete(false);
    },
    [dispatch]
  );

  return {
    //data props here
    data: {
      userState,
      modalDelete,
      alertSuccess,
    },
    //actions props here
    actions: {
      goBack,
      setModalDelete,
      setAlertSuccess,
      _joinEvent,
      _handDeleteEvent,
    },
  };
};

export default EventDetailLogic;

EventDetailLogic.dependencies = {
  navigator: EventDetailNavigator,
};
