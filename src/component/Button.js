import React, { useContext, useEffect, useMemo, useRef } from 'react';
import { View, FlatList, Text, TouchableOpacity, Image,StyleSheet } from 'react-native';

export default Button = ({ onPress, name, color = '#818BE9', buttonHeight = 50 }) => {
    const styles = StyleSheet.create({
        background: {
            width: '100%',
            borderRadius: 13,
            height: buttonHeight,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: color,
        },
        buttonText: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 15,
        },
    });

    return (

        <View style={styles.background} >
            <TouchableOpacity style={styles.background} onPress={onPress}>
                <Text style={styles.buttonText}>{name}</Text>
            </TouchableOpacity>
        </View>
    );

};
