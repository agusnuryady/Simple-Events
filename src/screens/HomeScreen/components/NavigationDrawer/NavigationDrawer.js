//package import
import React, { memo, useCallback, useState } from 'react';
import {
  Text,
  StatusBar,
  SafeAreaView,
  View,
  FlatList,
  ImageBackground,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';

//local import
import styles from './styles';
import I18n from '../../../../i18n';
import { COLORS, STYLES } from '../../../../configs';
import { Button, Modals, ScreenMessage } from '../../../../components';
import { CrossIcon, LogoutIcon } from '../../../../assets/svgs';
import { deleteEvents, logoutUser } from '../../../../redux/redux-actions';

const NavigationDrawer = () => {
  //package value
  const navigation = useNavigation();
  const dispatch = useDispatch();

  //state value
  const [modalLogout, setModalLogout] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [idEvent, setIdEvent] = useState(null);
  const userState = useSelector((state) => state.user);

  //variable value

  //place your function in here
  const _handleLogout = useCallback(() => {
    setModalLogout(false);
    dispatch(logoutUser(navigation));
  }, [dispatch, navigation]);

  const _handDeleteEvent = useCallback(
    (id) => {
      dispatch(deleteEvents(id));
      setModalDelete(false);
    },
    [dispatch]
  );

  //place your extension component here
  const _renderItemMenu = ({ item, index }) => {
    return (
      <Button
        types="nude"
        styleWrap={STYLES.br0}
        styleContainer={styles.wrapItem}
        onPress={() => navigation.navigate('EventDetail', { data: item })}
      >
        <ImageBackground
          source={{ uri: item.image }}
          resizeMode="cover"
          style={styles.imageItem}
        >
          <LinearGradient
            colors={['rgba(0, 0, 0, 0)', 'rgba(13, 10, 20, 0.8)']}
            style={styles.imageGrdient}
          />
        </ImageBackground>
        <View style={[STYLES.mrl16, STYLES.fx1]}>
          <Text numberOfLines={2} style={styles.titleItem}>
            {item.name}
          </Text>
          <Text style={styles.descItem}>
            {moment(item.date, 'DD-MM-YYYY').format('DD MMMM YYYY')}
          </Text>
        </View>
        <Button
          width={20}
          height={20}
          styleWrap={styles.wrapDeleleButton}
          styleContainer={styles.containerDeleleButton}
          onPress={() => {
            setModalDelete(!modalDelete);
            setIdEvent(item.id);
          }}
        >
          <CrossIcon width={8} height={8} fill={COLORS.primaryBlack} />
        </Button>
      </Button>
    );
  };

  return (
    <SafeAreaView style={styles.drawerWrap}>
      <StatusBar backgroundColor={COLORS.black90} barStyle="light-content" />
      <View style={[STYLES.w100, STYLES.pdh16]}>
        <View style={styles.drawerHeader}>
          <Text style={styles.headerText}>
            {I18n.t('welcome')},{'\n'}
            {userState.name}
          </Text>
        </View>
      </View>
      <View style={styles.drawerList}>
        <View style={STYLES.pd16}>
          <Text style={styles.titleText}>{I18n.t('myEvents')}</Text>
        </View>
        <FlatList
          data={userState.myEvent}
          keyExtractor={(item, index) => index.toString()}
          renderItem={_renderItemMenu}
          contentContainerStyle={userState.myEvent.length === 0 && STYLES.fxg1}
          ListEmptyComponent={
            <ScreenMessage
              title="List are empty"
              desc="You don`t have join any event yet"
            />
          }
        />
      </View>
      <View style={styles.drawerFooter}>
        <Button
          types="nude"
          styleWrap={STYLES.br0}
          styleContainer={styles.menuFooter}
          onPress={() => setModalLogout(!modalLogout)}
        >
          <LogoutIcon width={20} height={20} fill={COLORS.primaryWhite} />
          <Text style={[styles.footerText, STYLES.mrl8]}>
            {I18n.t('logout')}
          </Text>
        </Button>
      </View>
      <Modals
        visible={modalLogout}
        onPress={() => setModalLogout(false)}
        title="Are you sure want to Logout?"
        desc="Remember, logging out will erase all saved data"
      >
        <View
          style={[
            STYLES.w100,
            STYLES.rowAlgCenter,
            STYLES.jcSpcFxend,
            STYLES.mrt12,
          ]}
        >
          <Button
            width={124}
            title="Logout"
            color={COLORS.primaryBlack}
            styleContainer={styles.modalButton}
            onPress={_handleLogout}
          />
          <Button
            width={124}
            types="nude"
            title="Cancel"
            styleWrap={STYLES.mrl16}
            styleContainer={styles.modalButton}
            styleText={{ color: COLORS.primaryBlack }}
            onPress={() => setModalLogout(false)}
          />
        </View>
      </Modals>
      <Modals
        visible={modalDelete}
        onPress={() => setModalDelete(false)}
        title="Are you sure want to Unjoin?"
        desc="Event will be deleted from my event list"
      >
        <View
          style={[
            STYLES.w100,
            STYLES.rowAlgCenter,
            STYLES.jcSpcFxend,
            STYLES.mrt12,
          ]}
        >
          <Button
            width={124}
            types="nude"
            title="Cancel"
            styleContainer={styles.modalButton}
            styleText={{ color: COLORS.primaryBlack }}
            onPress={() => setModalDelete(false)}
          />
          <Button
            width={124}
            title="Unjoin"
            color={COLORS.primaryBlack}
            styleWrap={STYLES.mrl16}
            styleContainer={styles.modalButton}
            onPress={() => _handDeleteEvent(idEvent)}
          />
        </View>
      </Modals>
    </SafeAreaView>
  );
};

export default memo(NavigationDrawer);
