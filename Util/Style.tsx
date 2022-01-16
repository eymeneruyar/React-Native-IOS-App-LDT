import { StyleSheet,Dimensions } from 'react-native'
import { buttonBackgrounColor, statusBarHeight, titleColor,mainThemeBackgrounColor } from '../Util/Constants';


export const loginStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      paddingTop: statusBarHeight,
      padding: 8,
      backgroundColor: '#fff'
    },
    title: {
      textAlign: 'center',
      fontSize: 28,
      color: titleColor
    },
    btnView: {
      backgroundColor: buttonBackgrounColor,
      padding: 12,
      marginTop: 10,
      borderRadius: 25 
    },
    btnText: {
      color: '#fff',
      fontSize: 24,
      fontFamily: 'Arial',
      textAlign: 'center'
    },
    image: {
        alignSelf: 'center',
        marginBottom: 10,
        borderWidth: 3,
        borderColor: '#fff',
        borderRadius: 50,
    },
    logo: {
      alignSelf: 'center',
      position: 'absolute',
      top: Dimensions.get('window').height - 270,
    }
  })

  export const registerStyle = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: statusBarHeight - 60 ,
        padding: 8,
        backgroundColor: '#fff'
      },
      title: {
        textAlign: 'center',
        fontSize: 28,
        color: titleColor
      },
      btnView: {
        backgroundColor: buttonBackgrounColor,
        padding: 12,
        marginTop: 10,
        borderRadius: 25 
      },
      btnText: {
        color: '#fff',
        fontSize: 24,
        fontFamily: 'Arial',
        textAlign: 'center'
      },
      image: {
        alignSelf: 'center',
        marginBottom: 10,
        borderWidth: 3,
        borderColor: '#fff',
        borderRadius: 50,
      },
      logo: {
        alignSelf: 'center',
        position: 'absolute',
        top: Dimensions.get('window').height - 200,
      },
      orText: {
        alignSelf: 'center',
        marginTop: 10,
      }
  })

  export const homeStyle = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: statusBarHeight - 70 ,
        padding: 8,
        backgroundColor: mainThemeBackgrounColor
    }
  })

  export const addNotes = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: statusBarHeight - 70 ,
        padding: 8,
        backgroundColor: mainThemeBackgrounColor
    }
  })

  export const profileStyle = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: mainThemeBackgrounColor
    },
    infoColumnContainer:{
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingTop: 20,
        padding: 10,
        marginTop: 10,
        marginLeft: 10,
    },
    infoRowContainer:{
        flexDirection: 'row',
    },
    infoText:{
        textAlign: 'center',
        fontFamily: 'Arial',
        fontSize: 15
    },
    verticLine:{
        height: '100%',
        width: 2,
        backgroundColor: '#909090',
        marginRight: 30,
        marginLeft: 40,
    },
    backgroundImage:{
        alignSelf: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 350, 
        flex: 1,
    },
    avatar:{
        alignSelf: 'center',
        borderColor: '#000',
        borderRadius: 100,
        borderWidth: 2,
    },
    userInfo:{
        alignSelf:'center',
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
        fontFamily: 'Arial',
        fontWeight: 'bold'
    }
  })

  export const changePasswordStyle = StyleSheet.create({
      container:{
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        paddingTop: statusBarHeight + 75,
        backgroundColor: '#fff',
      },
      mainTitle:{
        fontFamily: 'Arial',
        fontSize: 25,
        marginLeft: 5,
        fontWeight: 'bold',
        marginBottom: 20
      },
      infoContainer:{
        justifyContent: "space-evenly",
        flexDirection: 'row',
        marginTop: 5,
        padding: 5
      },
      infoText:{
        justifyContent: 'flex-start',
        fontFamily: 'Arial',
        fontSize: 15,
      },
      btnView: {
        backgroundColor: buttonBackgrounColor,
        padding: 12,
        marginTop: 10,
        borderRadius: 25 
      },
      btnText: {
        color: '#fff',
        fontSize: 24,
        fontFamily: 'Arial',
        textAlign: 'center'
      },
  })