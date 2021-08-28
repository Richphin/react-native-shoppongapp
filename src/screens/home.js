import React from 'react'
import { View, Text ,StyleSheet,Image,TouchableOpacity} from 'react-native'

const Home = ({navigation}) => {
    const handleOnPress = () => {
		navigation.navigate('add to cart');
	};
    const handleSkip = () => {
		navigation.navigate('payment');
	};
    
    return (
        <View style={styles.container}>
            <View style={styles.detailcontainer}>
                <View  style={styles.headercontainer}>
                    <Text style={styles.header}>ONLINE SHOPPING</Text>
                </View>
                <View  style={styles.textcontainer}>
                    <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. 
                    </Text>
                </View>

            </View>

            <View style={styles.imagecontainer}>
                <Image style={styles.image} source={require('../../assets/undraw_Online_shopping_re_k1sv.png')}/>
            </View>

            <View style={styles.buttoncontainer}>
                <TouchableOpacity 
                style={styles.button}
                onPress={handleOnPress}
                >
                <Text style={styles.buttonText}>
                    Next
                </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.navcontainer}>
                
                    <TouchableOpacity>
                        <Text style={styles.navprevious}></Text>
                    </TouchableOpacity>
                   
                

                
                    <View style={styles.navstrokes}>
                        <View style={styles.oval}><Text></Text></View>
                        <View style={styles.circles}><Text></Text></View>
                        <View style={styles.circles}><Text></Text></View>
                    </View>
                    
               

                
                <TouchableOpacity onPress={handleSkip}>
                    <Text style={styles.navskip}>skip</Text>    
                </TouchableOpacity>
                    
                

            </View>
            
        </View>
    )
}

export default Home
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      
     
    },
    detailcontainer: {
        flex:0.3,
      },

      headercontainer: {
        marginVertical:10,
        justifyContent:'center',
        alignItems:'center',
      },

      header: {
        fontSize:25,
        fontWeight:'bold',
        marginBottom:20,
       
    },

      textcontainer: {
        justifyContent:'center',
        alignItems:'center',
       
      },

    text: {
        color:'#6036b1',
        fontSize:17,
        alignSelf:'center',
        justifyContent:'center'
      },

      imagecontainer: {
        flex:0.4,
        justifyContent:'center',
        alignItems:'center',
        
    },

    image: {
        height: 300,
      width: 300,
       marginTop:45,
    },

    buttoncontainer:{
        flex: 0.2,
        justifyContent:'center',
        alignItems:'center',
        
      },
    
      button:{
        width:'40%',
        height:45,
        backgroundColor:'#6036b1',
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        marginTop:100,
      },
    
      buttonText:{
        color:'white',
        fontSize:25,
        fontWeight:'bold',
      },
      navcontainer: {
        flex:0.2,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    nav: {
        
    },
    navprevious: {
        flex:0.3,
        justifyContent:'center',
        alignItems:'center',
        paddingRight:125,
    },
    navskip: {
        flex:0.3,
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:100,
    },
    navstrokes: {
        flex:0.4,
        justifyContent:'flex-end',
        alignItems:'center',
        flexDirection:'row',
        paddingBottom:20,
        
    },
    circles: {
        // flex:0.3,
        borderRadius:50,
        width:'25%',
        backgroundColor:'grey',
        marginHorizontal:2,
        
    },
    oval: {
        backgroundColor:'#6036b1',
        // flex:0.3,
        borderRadius:25,
        width:30,
        height:10,
    },
  });