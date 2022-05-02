/*
** EPITECH PROJECT, 2021
** B-DEV-501-MAR-5-1-redditech-amaury.danis-cousandier
** File description:
** MySubs.js
*/

import { useIsFocused } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { Subs } from './Sub';

export function MySubs({route, navigation}) {
    const {api} = route.params
    let [sub, setSub] = useState([]);
    const focusPocus = useIsFocused();

    const getMySubs = async () => {
        let subs = await api.makeRequest('https://oauth.reddit.com/subreddits/mine.json')
        setSub(subs.data.children.map(v => v.data));
        console.log(subs)
    }

    useEffect(() => {
        if (focusPocus) {
            getMySubs();
        }
    }, [focusPocus]);

    return (
        <SafeAreaView>
            <ScrollView>
                
                    <View>
                        <Text style={styles.title}>Your subscriptions</Text>
                        {sub.map(data => {
                                    return (
                                        <TouchableOpacity onPress={() => navigation.push('SubContent', {data: data, api: api})} key={Math.random()}>
                                            <Subs argv={data}/>
                                        </TouchableOpacity>
                                    )
                                }
                            )}
                    </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});