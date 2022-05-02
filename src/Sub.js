/*
** EPITECH PROJECT, 2021
** B-DEV-501-MAR-5-1-redditech-amaury.danis-cousandier
** File description:
** Sub.js
*/

import React from 'react';
import { StyleSheet,
        Text,
        View,
        SafeAreaView,
        ScrollView, 
        Image,
        TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export function Subs(argv) {
    const Sub = argv.argv;
    const iconURL = Sub.icon_img

    return (
        <SafeAreaView>
                <View style={styles.containerTitle}>
                    <Image source={{
                            uri: iconURL || 'https://www.redditstatic.com/avatars/avatar_default_02_46D160.png'
                            }} style={{width: 40, height: 40, borderRadius: 15, position: 'absolute', left: 7, top: 7}}/>
                        <Text style={styles.title}>{Sub.url}</Text>
                        <Text style={styles.data}>{Sub.public_description}</Text>
                        <View style={styles.info}>
                            <Ionicons name={'ios-people'} size={20} color={'#FF5700'}/>
                            <Text>{Sub.subscribers}</Text>
                            <Ionicons name={'ios-checkmark-circle-outline'} size={20} color={'#00c3ff'} style={{marginHorizontal: 20}}/>
                    </View>
                </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 200,
    },
    containerTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10%',
        padding: 7,
        marginHorizontal: 7,
        borderRadius: 10,
        backgroundColor: '#ffd0b8'
    },
    title: {
        borderRadius: 10,
        paddingHorizontal: '5%',
        paddingVertical:'1%',
        backgroundColor: '#ff5800',
        borderColor: 'black',
        borderWidth: 1,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        textDecorationLine: 'underline',
    },
    data: {
        fontSize: 20,
        marginTop: 5,
    },
    info: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});