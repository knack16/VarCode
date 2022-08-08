import { View, Text,Image, TouchableOpacity, TextInput} from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'


const Login = ({navigation}) => {
  return (
    <View style={{backgroundColor:'#3D67FF',height:'100%',padding:20,justifyContent:'space-between'}}>
        <View>
            <TouchableOpacity onPress={()=>navigation.navigate('LandingPage')}>
                <FontAwesome name='angle-left' size={50} color={'#fff'}/>   
            </TouchableOpacity>
            <Text style={{fontSize: 40, color: '#fff', fontWeight: 'bold'}}>Log In</Text>
        </View>
        <View>
            <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'#fff',borderRadius:20,padding:10,alignItems:'center'}}>
                <Image source={require('../../Assets/Images/preview.jpeg')} style={{height:'100%',width:'15%',borderRadius:30}}/>
                <Text style={{textAlign:'center',fontSize:20,fontWeight:'600',color:'#111',marginVertical:10}} >Log In with Google</Text>
                <AntDesign name='arrowright' size={30} color={'#111'}/>
            </View>
            <View style={{marginTop:10}}>
                <Text style={{color:'#fff'}}>
                    Email Address
                </Text>
                <TouchableOpacity style={{backgroundColor:'#fff',borderRadius:20,flexDirection:'row',alignItems:'center',marginVertical:10}}>
                    <Feather name='mail' size={30} color={'#111'} style={{marginHorizontal:20}}/>
                    <TextInput placeholder='Email Address' style={{fontSize:20,width:'75%',marginVertical:5}}/> 
                </TouchableOpacity>
            </View>
            <View >
                <Text style={{color:'#fff'}}>
                    Email Address
                </Text>
                <TouchableOpacity style={{backgroundColor:'#fff',borderRadius:20,flexDirection:'row',alignItems:'center',marginVertical:10}}>
                    <Feather name='lock' size={30} color={'#111'} style={{marginHorizontal:20}}/>
                    <TextInput placeholder='Password' secureTextEntry={true} style={{fontSize:20,width:'75%',marginVertical:5}}/> 
                </TouchableOpacity>
            </View>
        </View>
        <View>
        <TouchableOpacity style={{backgroundColor:'#111',color:'#fff',width:'100%',borderRadius:20}} onPress={()=>navigation.navigate('HomePage')}>
          <Text style={{marginHorizontal:25,marginVertical:15,textAlign:'center',fontSize:20,color:'#fff',fontWeight:'700'}}>Login</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default Login