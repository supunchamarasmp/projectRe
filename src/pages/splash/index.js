import React, {useContext, useEffect, useMemo, useRef} from 'react';
import {View, FlatList, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';

const Pure = ({navigation,
    
    ...props
  }) => {
    useEffect(() => {
        setTimeout(
            () => { navigation.navigate('Landing', {}) },
            3000
          )
      }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (

          <View style={styles.background} >
            <Image style={{width:'100%',height:'100%'}} source={require('../../img/SplashScreenS.png')}/>
            </View>
    );

};

const SplashScreen = Pure;
export default SplashScreen;
