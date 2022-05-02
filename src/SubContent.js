/*
** EPITECH PROJECT, 2021
** B-DEV-501-MAR-5-1-redditech-amaury.danis-cousandier
** File description:
** SubContent.js
*/

import { useIsFocused } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Image, Text, View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useEffect, useState } from 'react';
import { Subs } from './Sub';
import { Post } from './Post';

export function SubContent({route, navigation}) {
    const {data, api} = route.params;
    let [post, setPost] = useState([]);

    const focusPocus = useIsFocused();

    const getPosts = async (sch) => {
        const res = await api.makeRequest('https://oauth.reddit.com' + data.url + sch + '.json')
        setPost(res.data.children.map(s => s.data));
    }

    useEffect(() => {
        if (focusPocus) {
            getPosts("hot");
        }
    }, [focusPocus]);

    return(
        <SafeAreaView>
            <ScrollView>
                <Text style={styles.title}>{data.url}</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttons} onPress={() => getPosts("best")}>
                        <Ionicons name={'ios-thumbs-up'} size={20} color={'white'}/>
                        <Text style={{color: 'white'}}>Best</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => getPosts("hot")}>
                        <Ionicons name={'ios-flame'} size={20} color={'white'}/>
                        <Text style={{color: 'white'}}>Hot</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => getPosts("new")}>
                        <Ionicons name={'ios-time'} size={20} color={'white'}/>
                        <Text style={{color: 'white'}}>New</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => getPosts("top")}>
                        <Ionicons name={'ios-arrow-up'} size={20} color={'white'}/>
                        <Text style={{color: 'white'}}>Top</Text>
                    </TouchableOpacity>
                    </View>

                {post.map(p => {
                    return (
                        <Post argv={p}/>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF5700',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 15,
        width: 60,
        paddingVertical: 1,
        margin: 21
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingHorizontal: '2%',
        textAlign: 'center'
    }
});