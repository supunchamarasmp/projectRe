import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { View, FlatList, Text, Image, TouchableOpacity,ActivityIndicator } from 'react-native';
import Button from '../../component/Button';
import RadioButton from '../../component/RadioButton';
import { styles } from './styles';
import {donate, fundRaising} from '../../models/donetionModel';
import {connect} from 'react-redux';
import { Alert } from 'react-native/Libraries/Alert/Alert';
const Pure = ({
  navigation,fundraisings,donateAPI,
  ...props
}) => {
  const [donate, setDonate] = useState(-1);
  const [radioSelect, setRadioSelect] = useState(-1);

  useEffect(() => {
    fundraisings();
    <ActivityIndicator animating = {true} color = '#bc2b78' size = "large" style={{height:100,width:100}} />
  }, []); 

  const renderCard = ({ item, index }) => {
    return (
      <View style={{ padding: 15, backgroundColor: 'white', borderRadius: 10, marginBottom: 20 }}>
        {donate === index ? (
          renderDonation()
        ) : (
          <>
            <View style={{ width: '100%', height: 200, }}>
              <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('../../img/banner.png')} />
            </View>
            <View style={{ height: 10 }} />
            <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black' }}>{item.title}</Text>
            <View style={{ height: 10 }} />
            <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black' }}>{item.price}<Text style={{ fontWeight: 'bold', fontSize: 15, color: '#B2B4BA' }}> Raised</Text></Text>
            <View style={{ height: 10 }} />
            <Button onPress={() => {
              console.log("ddddddddddddddddddd",index);
              setDonate(index);
            }} name={'Donate Now'} />
          </>
        )}


      </View>
    );

  }

  const renderDonationCard = ({ item, index }) => {
    return (
      <View>
        <RadioButton onPress={() => {
          setRadioSelect(index);
        }}
          isSelect={radioSelect === index}
          name={item.name}

        />
      </View>
    );

  }

  const renderDonation = () => {
    return (
      <View style={{ padding: 15, backgroundColor: 'white', borderRadius: 10, marginBottom: 20 }}>
        <View style={{ width: 20, height: 20, backgroundColor: '#F4F4F4', alignSelf: 'flex-end', borderRadius: 100 }}>
          <TouchableOpacity onPress={() => {
            setRadioSelect(-1);
            setDonate(-1);
          }}>
            <Image style={{ width: '100%', height: '100%', resizeMode: 'contain' }} source={require('../../img/close.png')} />
          </TouchableOpacity>

        </View>
        <View style={{ height: 10 }} />
        <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black' }}>Select the amount that you want to donate</Text>
        <View style={{ height: 10 }} />

        <View style={{ flex: 1, padding: 10 }}>
          <FlatList
            data={[{ name: '$10' }, { name: '$20' }, { name: '$30' }]}
            renderItem={renderDonationCard}
            numColumns={1}

          />

        </View>

        <View style={{ height: 10 }} />
        <Button color='#F8C16F' onPress={() => {

          donateAPI({'fundraisingItemId':'AEaTUnvneik','amount':25});
          setRadioSelect(-1);
          setDonate(-1);
        }} name={'Pay Now'} />

      </View>
    );

  }

  return (

    <View style={styles().background}>
      <View style={{ width: '100%', height: 200, padding: 10 }}>
        <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('../../img/banner.png')} />
      </View>
      <View style={{ width: '100%', height: 120, padding: 10, justifyContent: 'center', alignItems: 'center', marginTop: -30 }}>
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

const mapStateToProps = (state) => {
  return {
   
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fundraisings: () => dispatch(fundRaising()),
    donateAPI: (payload) => dispatch(donate(payload)),
  };
};

const LandingScreen = connect(mapStateToProps, mapDispatchToProps)(Pure);
export default LandingScreen;
