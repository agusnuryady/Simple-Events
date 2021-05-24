import { useNavigation } from '@react-navigation/native';

const EventsNavigator = () => {
  //package value here
  const navigation = useNavigation();

  //place your function navigation in here
  const goBack = () => navigation.goBack();
  const goToEventDetailScreen = (item) =>
    navigation.navigate('EventDetail', { data: item });

  return {
    navigation,
    goBack,
    goToEventDetailScreen,
  };
};

export default EventsNavigator;
