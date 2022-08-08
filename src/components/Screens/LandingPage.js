import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const LandingPage = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#00BFFF', height: '100%', padding: 20,justifyContent:'space-between'}}>
      <View
        style={{height: '80%', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 20, color: '#fff', fontWeight: '600'}}>
          Welcome to
        </Text>
        <Text style={{fontSize: 60, color: '#fff', fontWeight: 'bold'}}>
          VarCode
        </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between',marginHorizontal:5,marginVertical:10}}>
        <TouchableOpacity style={{backgroundColor:'#fff',width:'45%',borderRadius:20}} onPress={()=>navigation.navigate('SignUp')}>
          <Text style={{marginHorizontal:25,marginVertical:15,textAlign:'center',fontSize:20,color:'#111',fontWeight:'700'}}>SignUp</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'#111',color:'#fff',width:'45%',borderRadius:20}} onPress={()=>navigation.navigate('Login')}>
          <Text style={{marginHorizontal:25,marginVertical:15,textAlign:'center',fontSize:20,color:'#fff',fontWeight:'700'}}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LandingPage;
