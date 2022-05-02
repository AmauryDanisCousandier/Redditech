/*
** EPITECH PROJECT, 2021
** B-DEV-501-MAR-5-1-redditech-amaury.danis-cousandier
** File description:
** Profile.js
*/

import React from 'react';
import {useEffect, useState} from 'react';
import { useIsFocused } from '@react-navigation/native';
import { SafeAreaView,
        StyleSheet,
        Text,
        View,
        Image,
        ScrollView } from 'react-native';
import { LoginScreen } from './Login';

export function ProfileScreen({route, nav}) {
    const {api} = route.params;
    let [description, setDescription] = useState();
    let [title, setTitle] = useState();
    let [cakeDay, setCakeDay] = useState();
    let [snoovatar, setSnoovatar] = useState();
    const [data, setData] = useState({});

    const focusPocus = useIsFocused();

    useEffect(() => {
        if (focusPocus) {
            api.makeRequest('https://oauth.reddit.com/api/v1/me').then(data => {
                console.log(data);
                setData(data)
                setDescription(data.subreddit.public_description)
                setCakeDay(data.created)
                setTitle(data.subreddit.title)
                setSnoovatar(data.snoovatar_img)
            })
        }
    }, [focusPocus]);


    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.info}>
                    <Image source={{uri: snoovatar || 'https://www.redditstatic.com/avatars/avatar_default_02_46D160.png'
                        }} style={{width: 150, height: 150, borderRadius: 100, borderColor: '#969696', borderWidth: 1, margin: 10}}
                    />
                    <View style={styles.name}>
                        <Text style={styles.u}>{title}</Text>
                        <Text style={styles.u}>u/{data.name}</Text>
                    </View>
                </View>

                <View style={styles.race}>
                    <View style={styles.containerTitle}>
                        <Text style={styles.title}>🫂</Text>
                        <Text style={styles.data}>{data.num_friends}</Text>
                    </View>
                    <View style={styles.containerTitle}>
                        <Text style={styles.title}>🌸</Text>
                        <Text style={styles.data}>{data.total_karma}</Text>
                    </View>
                    <View style={styles.containerTitle}>
                        <Text style={styles.title}>🪙</Text>
                        <Text style={styles.data}>{data.coins}</Text>
                    </View>
                </View>

                <Text style={styles.data}>You joined reddit exactly {cakeDay}s after the january 1st of 1970</Text>
                <Text style={styles.desc}>Description:</Text>
                <Text style={styles.desc}>{description}</Text>
                <LoginScreen route={route}></LoginScreen>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    containerTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#ffd0b8',
        borderRadius: 10,
        flexWrap: 'wrap',
        margin: 2
    },
    title: {
        fontSize: 12,
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    data: {
        fontSize: 12,
        margin: 5,
    },
    bottom: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF5700',
        marginTop: '20%'
    },
    info: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    race: {
        marginLeft: 10,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    name: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    u: {
        fontSize: 20,
        marginVertical: 10,
        fontWeight: 'bold'
    },
    desc: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        marginTop: 20
    }
});