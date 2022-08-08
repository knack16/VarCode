import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const Verify = ({navigation}) => {
  return (
    <View style={{height: '100%', backgroundColor: '#3D67FF'}}>
      <View style={{backgroundColor: '#3D67FF', height: '30%', padding: 20}}>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <FontAwesome name="angle-left" size={50} color={'#fff'} />
        </TouchableOpacity>
        <Text style={{fontSize: 40, color: '#fff', fontWeight: 'bold'}}>
          Verify
        </Text>
        <Image source={require('../../Assets/Images/mail.png')} style={{position:'absolute',height:'90%',width:'60%',alignSelf:'center',marginTop:'27%',zIndex:1}} />
      </View>
      <View
        style={{
          backgroundColor: '#363F61',
          height: '70%',
          justifyContent: 'space-between',
          padding: 20,
          zIndex:-1
        }}>
        <View>
          <Text  style={{
                marginTop: '20%',
                marginVertical: 15,
                textAlign: 'center',
                fontSize: 20,
                color: '#fff',
                fontWeight: '700',
              }}>
            Please check your email for the verification code sent to you
          </Text>
          <View style={{flexDirection:'row',justifyContent:'center'}}>
            <Text  style={{
                
                margin: 15,
                textAlign: 'center',
                fontSize: 20,
                color: '#fff',
                fontWeight: '700',
              }}>Didn’t recieve an email? </Text>
            <TouchableOpacity>
              <Text  style={{
                
                marginVertical: 15,
                textAlign: 'center',
                fontSize: 20,
                color: '#FFA439',
                fontWeight: '700',
              }}>Send again</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{marginVertical: 10}}>
          <TouchableOpacity
            style={{backgroundColor: '#fff', width: '100%', borderRadius: 20}}
            onPress={() => navigation.navigate('Login')}>
            <Text
              style={{
                marginHorizontal: 25,
                marginVertical: 15,
                textAlign: 'center',
                fontSize: 20,
                color: '#111',
                fontWeight: '700',
              }}>
              Complete
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Verify;
