//package import here
import React from 'react';
import { View, Text, ScrollView, ImageBackground } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';

//local import here
import styles from './EventDetail.styles';
import EventDetailLogic from './EventDetail.logic';
import I18n from '../../i18n';
import { Accordion, Alert, Button, Modals } from '../../components';
import { COLORS, STYLES } from '../../configs';
import { ArrowLeftIcon, LoctionIcon, MoneyIcon } from '../../assets/svgs';

const EventDetailScreen = ({ route }) => {
  //logic value here
  const { data, actions } = EventDetailLogic();
  const insets = useSafeAreaInsets();
  const dataItem = route.params.data;
  const isJoin = data.userState.myEvent.length
    ? data.userState.myEvent.filter((item, index) => item.id === dataItem.id)
    : [];

  //place your extension component here

  return (
    <View style={styles.container}>
      <Alert
        visible={data.alertSuccess}
        types="success"
        title="Success Joining the Event!"
        close={() => actions.setAlertSuccess(false)}
      />
      <Button
        width={40}
        height={40}
        types="nude"
        styleWrap={[
          styles.wrapButtonBack,
          STYLES.mrl8,
          { top: 16 + insets.top },
        ]}
        styleContainer={[styles.buttonBack, STYLES.pd0]}
        onPress={() => actions.goBack()}
      >
        <ArrowLeftIcon width={24} height={24} fill={COLORS.primaryWhite} />
      </Button>
      <ScrollView>
        <ImageBackground
          source={{ uri: dataItem.image }}
          resizeMode="cover"
          style={[styles.imageBg, { paddingTop: insets.top }]}
          imageStyle={[STYLES.w100, STYLES.fx1]}
        >
          <LinearGradient
            colors={['rgba(0, 0, 0, 0)', '#141318']}
            style={styles.wrapBottomLabel}
          >
            <Text style={[styles.titleText, STYLES.mrb4]}>{dataItem.name}</Text>
            <Text style={styles.subTitleText}>{dataItem.shortAddress}</Text>
          </LinearGradient>
        </ImageBackground>
        <View style={STYLES.pd16}>
          <Text style={[styles.categoryText, STYLES.mrb16]}>
            {moment(dataItem.date, 'DD-MM-YYYY').format('DD MMM YYYY')}
          </Text>
          <View style={[STYLES.rowAlgCenter, STYLES.mrb16]}>
            <LoctionIcon width={18} height={18} fill={COLORS.primaryBlue} />
            <Text style={[styles.normalText, STYLES.mrl12]}>
              {dataItem.longAddress}
            </Text>
          </View>
          <View style={STYLES.rowAlgCenter}>
            <MoneyIcon width={18} height={18} fill={COLORS.primaryBlue} />
            <Text style={[styles.normalText, STYLES.mrl12]}>
              {dataItem.isPay ? 'Paid' : 'Free'}
            </Text>
          </View>
        </View>
        <View style={[STYLES.w100, STYLES.pd16]}>
          <Accordion label="About" textChildren={true} desc={dataItem.about} />
        </View>
        <View style={STYLES.pd16}>
          <Text style={[styles.categoryText, STYLES.mrb16]}>
            {I18n.t('rundown')}
          </Text>
          {dataItem.rundown.map((item, index) => (
            <View key={index + 1} style={STYLES.mrb16}>
              <Text style={[styles.dateText, STYLES.mrb4]}>
                {moment(item.time, 'hh:mm:ss').format('hh:mm A')}
              </Text>
              <Text style={styles.normalText}>{item.name}</Text>
            </View>
          ))}
        </View>
        <View
          style={[
            STYLES.w100,
            STYLES.pd16,
            { paddingBottom: 16 + insets.bottom },
          ]}
        >
          <Button
            color={COLORS.primaryBlue}
            styleText={{ color: COLORS.primaryBlack }}
            title={isJoin.length ? 'Unjoin Event' : 'Join Now'}
            onPress={
              isJoin.length
                ? () => actions.setModalDelete(true)
                : () => actions._joinEvent(dataItem)
            }
          />
        </View>
      </ScrollView>
      <Modals
        visible={data.modalDelete}
        onPress={() => actions.setModalDelete(false)}
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
            onPress={() => actions.setModalDelete(false)}
          />
          <Button
            width={124}
            title="Unjoin"
            color={COLORS.primaryBlack}
            styleWrap={STYLES.mrl16}
            styleContainer={styles.modalButton}
            onPress={() => actions._handDeleteEvent(dataItem.id)}
          />
        </View>
      </Modals>
    </View>
  );
};

export default EventDetailScreen;
