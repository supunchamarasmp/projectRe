import React, { useContext, useEffect, useMemo, useRef } from 'react';
import { View, FlatList, Text, TouchableOpacity, Image, StyleSheet, ActivityIndicator } from 'react-native';

import {connect} from 'react-redux';

const Pure = ({ isLoading }) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 70
        },
        activityIndicator: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: 80
        }
    });
if(isLoading){
    return (
        <>
            {
                isLoading && (
                    <View style={styles.container}>
                        <ActivityIndicator
                            animating={isLoading}
                            color='#bc2b78'
                            size="large"
                            style={styles.activityIndicator} />
                    </View>
                )
            }
        </>


    );

}else{
    return
}
    
};

const mapStateToProps = (state) => {
    return {
        isLoading: state.donetion.isLoading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

const Loader = connect(mapStateToProps, mapDispatchToProps)(Pure);
export default Loader;
