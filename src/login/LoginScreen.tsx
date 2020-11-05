import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Images} from '../../src/common/images/Images';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';

import styled from 'styled-components';
import InputField from '../components/InputField';
import {postLogin} from '../common/network/apis';

const LoginScreen = () => {
  return (
    <KeyboardAwareScrollView style={{flex: 1}}>
      <Container>
        <Image
          style={{resizeMode: 'contain', width: 300, height: 300}}
          source={Images.splash.logo}
        />
        <TitleContainer>
          <Title>Kitman Labs</Title>
          <Subtitle>Powering Human Performance</Subtitle>
        </TitleContainer>
        <FooterContainer>
          <Login />
        </FooterContainer>
      </Container>
    </KeyboardAwareScrollView>
  );
};

export const Login = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginResponse = async () => {
    const response = await postLogin(username, password);
    return response.data.username;
  };

  function onEmailChange(newText: string) {
    setUsername(newText);
  }
  function onPasswordChange(newText: string) {
    setPassword(newText);
  }

  function hasValidInputFields() {
    return username !== '' && password !== '';
  }

  async function onSubmit() {
    if ((await loginResponse().then()) === 'sampleUsername') {
      return navigation.navigate('List of Athletes');
    }
    Alert.alert(
      'Incorrect Username or Password',
      'Please try again',
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );
  }

  return (
    <View>
      <InputField
        onChangeText={onEmailChange}
        value={username}
        placeholder={'Username'}
        secureTextEntry={false}
      />
      <InputField
        onChangeText={onPasswordChange}
        value={password}
        placeholder={'Password'}
        secureTextEntry={true}
      />
      <SubmitButton style={!hasValidInputFields() ? {opacity: 0.5} : {}}>
        <TouchableOpacity
          onPress={() => onSubmit()}
          disabled={!hasValidInputFields()}>
          <SubmitText>Login</SubmitText>
        </TouchableOpacity>
      </SubmitButton>
    </View>
  );
};

export default LoginScreen;

const Container = styled(SafeAreaView)`
  flex: 1
  padding: 20px
  justify-content: center
  align-items: center
`;
const TitleContainer = styled(View)`
  flex: 0.4;
  padding-top: 20px;
`;

const FooterContainer = styled(Container)`
  margin-top: 50px;
`;

const Title = styled(Text)`
  font-size: 35px
  fontWeight: bold
  color: #0C113B
  text-align: center
`;
const Subtitle = styled(Text)`
  font-size: 25px
  color: #2B53B2
  text-align: center
`;

const SubmitText = styled(Text)`
  font-size: 25px
  color: white;
`;

const SubmitButton = styled(Container)`
    marginTop: 30px
    elevation: 8
    backgroundColor: #0C113B
    borderRadius: 10px
    paddingVertical: 10px
    paddingHorizontal: 12px
    height: 60px
    justifyContent: center
    shadowColor: #000
    shadowOpacity:  0.4
    shadowRadius: 3px
    shadow-offset: 0px 2px
    `;
