import React, { useContext, useEffect, useMemo, useRef } from 'react';
import { View, FlatList, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default RadioButton = ({ isSelect = false,onPress, name }) => {
    const styles = StyleSheet.create({
        container: {
            marginBottom: 25,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        radioText: {
            marginRight: 35,
            fontSize: 15,
            color: '#000',
            fontWeight: '700'
        },
        radioCircle: {
            height: 15,
            width: 15,
            borderRadius: 100,
            borderWidth: 2,
            borderColor: '#3740ff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        selectedRb: {
            width: 7,
            height: 7,
            borderRadius: 50,
            backgroundColor: '#3740ff',
        },
        result: {
            marginTop: 20,
            color: 'white',
            fontWeight: '600',
            backgroundColor: '#F3FBFE',
        },
    });

    return (

        <View>
            <View style={styles.container}>
                <Text style={styles.radioText}>{name}</Text>
                <TouchableOpacity
                    style={styles.radioCircle}
                    onPress={onPress}>
                    {isSelect && <View style={styles.selectedRb} />}
                </TouchableOpacity>
            </View>
        </View>
    );

};
