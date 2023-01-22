import React, { useContext, useEffect, useMemo, useRef } from 'react';
import { View, FlatList, Text, Image } from 'react-native';
import Button from '../../component/Button';
import { styles } from './styles';

const Pure = ({
  navigation,
  ...props
}) => {
  useEffect(() => {

  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const renderCard = ({ item, index }) => {
    return (
      <View style={{ padding: 15, backgroundColor: 'white', borderRadius: 10, marginBottom: 20 }}>
        <View style={{ width: '100%', height: 200, }}>
          <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('../../img/banner.png')} />
        </View>
        <View style={{ height: 10 }} />
        <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black' }}>{item.title}</Text>
        <View style={{ height: 10 }} />
        <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black' }}>{item.price}<Text style={{ fontWeight: 'bold', fontSize: 15, color: '#B2B4BA' }}> Raised</Text></Text>
        <View style={{ height: 10 }} />
      <Button onPress={()=>{
      }} name={'Donate Now'}/>
      
      </View>
    );

  }

  return (

    <View style={styles().background}>
     
      <View style={{ width: '100%', height: 120, padding: 10, justifyContent: 'center', alignItems: 'center', marginTop: -10 }}>
        <Image style={{ width: '40%', height: '100%', resizeMode: 'contain' }} source={require('../../img/title.png')} />
      </View>
      <View style={{ flex: 1, padding: 10 }}>
        <FlatList
          data={[{ img: require('../../img/cardImg.png'), title: 'Build school Wellawaya Sri Lanka', price: '$ 6900', precentage: '60%' },
          { img: require('../../img/cardImg.png'), title: 'Build school Wellawaya Sri Lanka', price: '$ 6900', precentage: '60%' },
          { img: require('../../img/cardImg.png'), title: 'Build school Wellawaya Sri Lanka', price: '$ 6900', precentage: '60%' }]}
          renderItem={renderCard}
          numColumns={1}

        />

      </View>


    </View>
  );

};

const DonationScreen = Pure;
export default DonationScreen;
