//package import
import React, { useEffect, memo } from 'react';
import { View, Text, Image } from 'react-native';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

//local import
import styles from './styles';
import { STYLES } from '../../configs';

const Component = ({
  visible,
  onPress,
  onPressLink,
  sourceImage,
  sourceIcon,
  styleImage,
  styleTitle,
  styleDesc,
  styleLink,
  title,
  desc,
  link,
  children,
}) => {
  //package value
  const insets = useSafeAreaInsets();

  //state value

  //variable value

  //native effect
  useEffect(() => {
    //function here
  }, []);

  return (
    <Modal
      backdropOpacity={0.3}
      isVisible={visible}
      onBackdropPress={onPress}
      onBackButtonPress={onPress}
      onSwipeComplete={onPress}
      swipeDirection="down"
      style={styles.wrapModal}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationInTiming={200}
      animationOutTiming={200}
    >
      <View
        style={[styles.containerModal, { paddingBottom: 16 + insets.bottom }]}
      >
        {sourceImage ? (
          <Image
            source={sourceImage}
            style={[styles.image, styleImage]}
            resizeMode="contain"
          />
        ) : null}
        {sourceIcon ? <View style={STYLES.mrb12}>{sourceIcon}</View> : null}
        {title ? <Text style={[styles.title, styleTitle]}>{title}</Text> : null}
        {desc ? (
          <Text style={[styles.desc, styleDesc]}>
            {desc}{' '}
            {link ? (
              <Text style={[styles.link, styleLink]} onPress={onPressLink}>
                {link}
              </Text>
            ) : null}
          </Text>
        ) : null}
        {children}
      </View>
    </Modal>
  );
};

Component.propTypes = {
  visible: PropTypes.bool,
  onPress: PropTypes.func,
  onPressLink: PropTypes.func,
  sourceImage: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
  sourceIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
  styleImage: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  styleTitle: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  styleDesc: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  styleLink: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  title: PropTypes.string,
  desc: PropTypes.string,
  link: PropTypes.string,
  children: PropTypes.node,
};

Component.defaultProps = {
  visible: false,
  onPress: () => {},
  onPressLink: () => {},
  sourceImage: '',
  sourceIcon: <View />,
  styleImage: {},
  styleTitle: {},
  styleDesc: {},
  styleLink: {},
  title: '',
  desc: '',
  link: '',
  children: <View />,
};

export default memo(Component);
