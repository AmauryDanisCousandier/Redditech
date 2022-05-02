/*
** EPITECH PROJECT, 2021
** B-DEV-501-MAR-5-1-redditech-amaury.danis-cousandier
** File description:
** Post.js
*/

import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Switch, Image, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

// function displayPayload(args) {
    
//     switch (key) {
//         case value:
            
//             break;
    
//         default:
//             break;
//     }

// }

export function Post(argv) {
    const p = argv.argv;
    let payload = undefined;

    switch (p.post_hint) {
        case 'self':
            payload = p.selftext
            break;
        case 'image':
            payload = p.url.replace(/&amp;/g, "&")
            console.log(payload);
            break;
        default:
            break;
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.title}>{p.title}</Text>
                <Text>By u/{p.author}</Text>
                <Text>{p.ups} upvotes</Text>
                <Text>{payload}</Text>
                <Image source={{
                            uri: payload
                            }} style={{width: 300, height: 200}}/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#b5b5b5',
        margin: '2%',
        padding: '2%',
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: '#9e9e9e',
        borderRadius: 10,
        paddingHorizontal: '2%'
    }
});