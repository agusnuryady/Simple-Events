//package import
import React from 'react';
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';

//local import here
import styles from './Events.styles';
import EventsLogic from './Events.logic';
import I18n from '../../i18n';
import { COLORS, STYLES } from '../../configs';
import { Button, Card, Header, Input } from '../../components';
import { widthByScreen } from '../../utils';
import {
  CrossIcon,
  GridIcon,
  ListIcon,
  MenuIcon,
  SearchIcon,
} from '../../assets/svgs';

const EventsScreen = () => {
  //logic value here
  const { data, actions } = EventsLogic();
  const instets = useSafeAreaInsets();

  //place your extension component here
  const _renderItemMenu = ({ item, index }) => {
    return (
      <View style={data.isList ? styles.listWrapItem : styles.gridWrapItem}>
        <Card
          onPress={() => actions.goToEventDetailScreen(item)}
          width={'100%'}
          height={data.isList ? widthByScreen(100) + 40 : widthByScreen(60)}
          styleContainer={styles.menuConten}
          styleWrap={styles.menuWrap}
          color={COLORS.black90}
          types="button"
        >
          <ImageBackground
            source={{ uri: item.image }}
            resizeMode="cover"
            style={styles.imageBgContent}
            imageStyle={styles.imageBgContent}
          >
            <View style={styles.contentTop}>
              {data.isList && (
                <View style={styles.wrapDateBox}>
                  <Text numberOfLines={1} style={styles.dateBigText}>
                    {moment(item.date, 'DD-MM-YYYY').format('DD')}
                  </Text>
                  <Text numberOfLines={1} style={styles.dateSmallText}>
                    {moment(item.date, 'DD-MM-YYYY').format('MMM')}
                  </Text>
                </View>
              )}
            </View>
            <LinearGradient
              colors={['rgba(0, 0, 0, 0.1)', '#141318']}
              style={
                data.isList ? styles.contentBottom : styles.contentBottomGrid
              }
            >
              {data.isList && (
                <View style={[styles.labelBox, STYLES.mrb4]}>
                  <Text numberOfLines={1} style={styles.menuLabel}>
                    {item.isPay ? 'Paid' : 'Free'}
                  </Text>
                </View>
              )}
              <Text
                numberOfLines={data.isList ? 1 : 3}
                style={[
                  data.isList ? styles.menuTitle : styles.menuTitleGrid,
                  STYLES.mrb4,
                ]}
              >
                {item.name}
              </Text>
              {data.isList && (
                <Text numberOfLines={1} style={[styles.menuSubTitle]}>
                  {item.shortAddress}
                </Text>
              )}
            </LinearGradient>
          </ImageBackground>
        </Card>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header
        styleWrap={styles.headerWrap}
        styleContainer={styles.headerContainer}
        color={COLORS.blackOp3}
      >
        {!data.isSearch && (
          <Button
            width={40}
            height={40}
            types="nude"
            styleWrap={styles.buttonNavRadius}
            styleContainer={[styles.buttonNavRadius, STYLES.pd0]}
            onPress={() => actions.navigation.toggleDrawer()}
          >
            <MenuIcon width={24} height={24} fill={COLORS.black60} />
          </Button>
        )}
        {data.isSearch ? (
          <Input
            value={data.searchEvent}
            onChangeText={(val) => actions.setSearchEvent(val)}
            placeholder={I18n.t('searchEvent')}
            returnKeyType="done"
            autoFocus={true}
            styleWrap={[STYLES.fx1, STYLES.mrh8]}
            styleBox={styles.inputBox}
          />
        ) : (
          <Text style={styles.headerTitle}>{I18n.t('events')}</Text>
        )}
        <Button
          width={40}
          height={40}
          types="nude"
          styleWrap={styles.buttonNavRadius}
          styleContainer={[styles.buttonNavRadius, STYLES.pd0]}
          onPress={() => {
            actions.setIsSearch(!data.isSearch);
            actions.setSearchEvent('');
          }}
        >
          {data.isSearch ? (
            <CrossIcon width={14} height={14} fill={COLORS.black60} />
          ) : (
            <SearchIcon width={20} height={20} fill={COLORS.black60} />
          )}
        </Button>
      </Header>
      {!data.isScrolling && (
        <View
          style={[
            styles.wrapFilter,
            {
              top: 76 + instets.top,
            },
          ]}
        >
          <TouchableWithoutFeedback onPress={() => actions.setIsList(true)}>
            <View
              style={[
                styles.wrapLeftButtonFilter,
                data.isList && { backgroundColor: COLORS.primaryBlue },
              ]}
            >
              <ListIcon
                width={14}
                height={14}
                fill={data.isList ? COLORS.primaryWhite : COLORS.black60}
              />
              <Text
                style={[
                  styles.menuSubTitle,
                  STYLES.mrl4,
                  {
                    color: data.isList ? COLORS.primaryWhite : COLORS.black70,
                  },
                ]}
              >
                {I18n.t('list')}
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => actions.setIsList(false)}>
            <View
              style={[
                styles.wrapRightButtonFilter,
                !data.isList && { backgroundColor: COLORS.primaryBlue },
              ]}
            >
              <GridIcon
                width={12}
                height={12}
                fill={!data.isList ? COLORS.primaryWhite : COLORS.black60}
              />
              <Text
                style={[
                  styles.menuSubTitle,
                  STYLES.mrl4,
                  {
                    color: !data.isList ? COLORS.primaryWhite : COLORS.black70,
                  },
                ]}
              >
                {I18n.t('grid')}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      )}
      <FlatList
        data={
          data.searchEvent
            ? data.eventList.filter((item, index) =>
                item.name.includes(data.searchEvent)
              )
            : data.eventList
        }
        key={data.isList ? '_' : '#'}
        keyExtractor={(item, index) =>
          data.isList ? '_' + index.toString() : '#' + index.toString()
        }
        numColumns={data.isList ? 1 : 2}
        onScrollBeginDrag={() => actions.setIsScrolling(true)}
        onScrollEndDrag={() => actions.setIsScrolling(false)}
        contentContainerStyle={{
          paddingTop: 68 + instets.top,
          paddingBottom: 8 + instets.bottom,
        }}
        renderItem={_renderItemMenu}
      />
    </View>
  );
};

export default EventsScreen;
