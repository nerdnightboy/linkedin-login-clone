import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Checkbox } from "react-native-paper"

export default function App() {
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      
      <View style={styles.section1}>
        <Image style={styles.linkedinlogo} source={require('./images/linkedin.png')} />
        <Text style={{color:'#0B65C0', fontWeight:'700', fontSize:20,}}>Join now</Text>
      </View>



      {/* <View>Section 2 </View> */}
      <View style={styles.section2}>
        <Text style={{fontSize:35, fontWeight:'600'}}>Sign in</Text>
        <TextInput style={styles.mytextinput} placeholder="Email or Phone" />
        <TextInput style={styles.mytextinput} placeholder="Password" secureTextEntry={true} />

        <View style={styles.section2a}>
          <Checkbox status={checked?"checked":"unchecked"} onPress={()=>{setChecked(!checked)}} color='green'/>
          <Text style={{color:'grey', fontSize:15,}}>Remember me?</Text>
          <Text style={{color:'#0B65C0', fontWeight:'600', fontSize:17,}} > Learn more</Text>
        </View>

        <Text style={{color:'#0B65C0', fontWeight:'700', fontSize:15,}}>Forgot password?</Text>
        <TouchableOpacity>
          <Text style={styles.mybtn1}>Continue</Text>
        </TouchableOpacity>

        <View style={styles.section2b}>
          <View style={styles.myhr}></View>
          <Text style={styles.ortext}>OR</Text>
          <View style={styles.myhr}></View>
        </View>


        <TouchableOpacity>
          <View style={styles.mybtn2}> 
            <Image style={styles.mybtnicon} source={require('./images/pngwing.com.png')} />
            <Text style={styles.btn2text}>  Sign in with Google</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.mybtn2}> 
            <Image style={styles.mybtnicon} source={require('./images/png-apple-logo-9708.png')} />
            <Text style={styles.btn2text}>  Sign in with Apple</Text>
          </View>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
  },
  linkedinlogo: {
    width:100,
    height:50,
    resizeMode:'contain',
  },
  section1 :{
    flex:0,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:'95%',
  },
  section2:{
    flex:0,
    flexDirection:'column',
    width:'90%',

  },
  mytextinput:{
    fontSize:17,
    borderBottomColor:'grey',
    borderBottomWidth:1,
    height:38,
    marginTop:20,
    padding:0,
  },
  section2a:{
    flex:0,
    flexDirection:'row',
    alignItems:'center',
    paddingVertical:20,
    transform:[{translateX:-10}],
  },
  mybtn1:{
    backgroundColor:'#0B65C0',
    fontSize:22,
    color:'white',
    textAlign:'center',
    borderRadius:30,
    marginVertical:20,
    padding:10,
    fontWeight:'700',
    width:'100%',
  },
  section2b:{
    flex:0,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:'100%'
  },
  myhr:{
    borderBottomColor:'grey',
    borderBottomWidth:1,
    justifyContent:'center',
    width:'40%',
  },
  ortext:{
    color:'grey',
    fontWeight:'600',
    fontSize:15,
    padding:10,
  },
  mybtnicon:{
    width:20,
    height:20,
  },
  mybtn2:{
    flex:0,
    flexDirection:'row',
    marginHorizontal:10,
    borderColor:'black',
    borderWidth:1,
    padding:10,
    borderRadius:30,
    marginVertical:10,
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  btn2text:{
    fontSize:15,
  }
});
