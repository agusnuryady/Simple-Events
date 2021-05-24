//package import
import React, { memo, useEffect, useState, useCallback } from 'react';
import { View, Text, Animated, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

//local import
import styles from './styles';
import { COLORS } from '../../configs';
import Button from '../Button';
import {
  CheckCircleIcon,
  WarningIcon,
  InfoCircleIcon,
  CloseCircleIcon,
  CrossIcon,
} from '../../assets/svgs';

const Alert = ({ close, desc, title, visible, types, duration }) => {
  //state value
  const [bounceValue] = useState(new Animated.Value(-200));
  const [icon, setIcon] = useState(null);
  const [iconClose, setIconClose] = useState(null);
  const [color, setColor] = useState(COLORS.red80);
  const insets = useSafeAreaInsets();

  //native effect
  useEffect(() => {
    if (visible) {
      _setVariable();
      _setIconClose();
      _show();
    }
  }, [_close, _setIconClose, _setVariable, _show, visible]);

  //place your function in here
  const _show = useCallback(() => {
    Animated.spring(bounceValue, {
      toValue: 0,
      velocity: 3,
      tension: 2,
      friction: 8,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      _close();
    }, duration);
  }, [_close, bounceValue, duration]);

  const _close = useCallback(() => {
    close();
    Animated.spring(bounceValue, {
      toValue: -200,
      velocity: 3,
      tension: 2,
      friction: 8,
      useNativeDriver: true,
    }).start();
  }, [bounceValue, close]);

  const _setVariable = useCallback(() => {
    switch (types) {
      case 'success':
        setIcon(
          <CheckCircleIcon width="15" height="15" fill={COLORS.primaryWhite} />
        );
        setColor(COLORS.green50);
        break;
      case 'warning':
        setIcon(
          <WarningIcon width="15" height="15" fill={COLORS.primaryWhite} />
        );
        setColor(COLORS.yellow70);
        break;
      case 'information':
        setIcon(
          <InfoCircleIcon width="15" height="15" fill={COLORS.primaryWhite} />
        );
        setColor(COLORS.blue40);
        break;
      case 'error':
        setIcon(
          <CloseCircleIcon width="15" height="15" fill={COLORS.primaryWhite} />
        );
        setColor(COLORS.red80);
        break;
    }
  }, [types]);

  const _setIconClose = useCallback(() => {
    setIconClose(
      <CrossIcon width="10" height="10" fill={COLORS.primaryWhite} />
    );
  }, []);

  return (
    <Animated.View
      style={[
        {
          transform: [{ translateY: bounceValue }],
          top: StatusBar.currentHeight + insets.top,
        },
        styles.wrapAlert,
      ]}
    >
      <View style={[styles.containerAlert, { backgroundColor: color }]}>
        <View style={styles.wrapIcon}>{icon}</View>
        <View style={styles.wrapText}>
          {title ? (
            <Text numberOfLines={2} style={styles.textTitle}>
              {title}
            </Text>
          ) : null}
          {desc ? (
            <Text numberOfLines={2} style={styles.textDesc}>
              {desc}
            </Text>
          ) : null}
        </View>
        <Button
          types="nude"
          onPress={_close}
          styleWrap={styles.wrapClose}
          styleContainer={styles.containerClose}
        >
          {iconClose}
        </Button>
      </View>
    </Animated.View>
  );
};

Alert.propTypes = {
  types: PropTypes.oneOf(['success', 'warning', 'information', 'error']),
  visible: PropTypes.bool,
  title: PropTypes.string,
  desc: PropTypes.string,
  close: PropTypes.func,
  duration: PropTypes.number,
};

Alert.defaultProps = {
  types: 'error',
  visible: false,
  title: '',
  desc: '',
  close: () => {},
  duration: 3000,
};

export default memo(Alert);
