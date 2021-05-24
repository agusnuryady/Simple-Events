//package import here
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

//local import here
import styles from './Login.styles';
import LoginLogic from './Login.logic';
import I18n from '../../i18n';
import { Button, Input } from '../../components';
import { COLORS, STYLES } from '../../configs';

const LoginScreen = () => {
  //logic value here
  const { data, actions } = LoginLogic();

  //place your extension component here

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.content}>
          <View style={styles.wrapHeader}>
            <Text style={[styles.titleText, STYLES.mrb8]}>
              {I18n.t('letsSignIn')}
            </Text>
            <Text style={[styles.subTitleText, STYLES.mrb20]}>
              {I18n.t('wellcomeBack')}
            </Text>
          </View>
          <Input
            value={data.name}
            onChangeText={(val) => actions.setName(val)}
            placeholder={I18n.t('yourName')}
            returnKeyType="done"
            autoFocus={true}
            styleWrap={STYLES.mrb20}
            styleTextInput={STYLES.txtAlCtr}
            onSubmitEditing={actions._handleLogin}
          />
          <Button
            title={I18n.t('signIn')}
            disabled={!data.name}
            styleWrap={STYLES.br15}
            styleContainer={[STYLES.br15, STYLES.pd20]}
            color={COLORS.primaryWhite}
            styleText={styles.buttonText}
            onPress={actions._handleLogin}
          />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default LoginScreen;
