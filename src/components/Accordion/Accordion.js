//package import
import React, { memo, useState, useCallback, useEffect } from 'react';
import { View, LayoutAnimation, UIManager, Platform, Text } from 'react-native';
import PropTypes from 'prop-types';

//local import
import styles from './styles';
import Button from '../Button';
import { COLORS, STYLES } from '../../configs';
import { ChevronDownIcon, ChevronUpIcon } from '../../assets/svgs';

const Accordion = ({
  children,
  textChildren,
  label,
  desc,
  styleButtonLabel,
  styleLabel,
  styleWrap,
  isShow,
}) => {
  //state value here
  const [isExpand, setIsExpand] = useState(isShow);
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    _setIcon(isShow);
  }, [_setIcon, isShow]);

  // //place your function in here
  const _toggleExpand = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpand(!isExpand);
    _setIcon(!isExpand);
  }, [_setIcon, isExpand]);

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const _setIcon = useCallback((expand) => {
    if (expand) {
      setIcon(
        <ChevronUpIcon width="12" height="12" fill={COLORS.primaryWhite} />
      );
    } else {
      setIcon(
        <ChevronDownIcon width="12" height="12" fill={COLORS.primaryWhite} />
      );
    }
  }, []);

  return (
    <View style={[STYLES.w100, styleWrap]}>
      <Button
        types="nude"
        styleWrap={[STYLES.w100, STYLES.br0]}
        styleContainer={[styles.containerButton, styleButtonLabel]}
        onPress={_toggleExpand}
      >
        <Text style={[styles.categoryText, styleLabel]}>{label}</Text>
        {icon}
      </Button>
      {textChildren && (
        <Text
          numberOfLines={isExpand ? 0 : 3}
          style={[styles.normalText, STYLES.mrt16]}
        >
          {desc}
        </Text>
      )}
      {isExpand && children}
    </View>
  );
};

Accordion.propTypes = {
  children: PropTypes.node,
  textChildren: PropTypes.bool,
  isShow: PropTypes.bool,
  label: PropTypes.string,
  desc: PropTypes.string,
  styleButtonLabel: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  styleLabel: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  styleWrap: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
};

Accordion.defaultProps = {
  children: <View />,
  textChildren: false,
  isShow: false,
  label: '',
  desc: '',
  styleButtonLabel: {},
  styleLabel: {},
  styleWrap: {},
};

export default memo(Accordion);
