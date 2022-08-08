import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const SignUp = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: '#3D67FF',
        height: '100%',
        padding: 20,
        justifyContent: 'space-between',
      }}>
      <View>
        <TouchableOpacity>
          <FontAwesome name="angle-left" size={50} color={'#fff'} onPress={()=>navigation.navigate('LandingPsge')}/>
        </TouchableOpacity>
        <Text style={{fontSize: 40, color: '#fff', fontWeight: 'bold'}}>
          Sign Up
        </Text>
      </View>
      <View>
        <View style={{marginTop: 10}}>
          <Text style={{color: '#fff'}}>Username</Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#fff',
              borderRadius: 20,
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <Feather
              name="user"
              size={30}
              color={'#111'}
              style={{marginHorizontal: 20}}
            />
            <TextInput
              placeholder="Username"
              style={{fontSize: 20, width: '75%', marginVertical: 5}}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 10}}>
          <Text style={{color: '#fff'}}>Email Address</Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#fff',
              borderRadius: 20,
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <Feather
              name="mail"
              size={30}
              color={'#111'}
              style={{marginHorizontal: 20}}
            />
            <TextInput
              placeholder="Email Address"
              style={{fontSize: 20, width: '75%', marginVertical: 5}}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{color: '#fff'}}>Email Address</Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#fff',
              borderRadius: 20,
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <Feather
              name="lock"
              size={30}
              color={'#111'}
              style={{marginHorizontal: 20}}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              style={{fontSize: 20, width: '75%', marginVertical: 5}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: '#111',
            color: '#fff',
            width: '100%',
            borderRadius: 20,
          }}
          onPress={() => navigation.navigate('Verify')}>
          <Text
            style={{
              marginHorizontal: 25,
              marginVertical: 15,
              textAlign: 'center',
              fontSize: 20,
              color: '#fff',
              fontWeight: '700',
            }}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
