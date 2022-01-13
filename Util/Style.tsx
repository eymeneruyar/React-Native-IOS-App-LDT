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

  export const profileStyle = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: statusBarHeight - 70 ,
        padding: 8,
        backgroundColor: mainThemeBackgrounColor
    }
  })