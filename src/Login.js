/*
** EPITECH PROJECT, 2021
** B-DEV-501-MAR-5-1-redditech-amaury.danis-cousandier
** File description:
** Login.js
*/

import React from 'react';
import Auth from '../API.js';
import {useEffect, useState} from 'react';
import {makeRedirectUri, useAuthRequest} from 'expo-auth-session';
import { SafeAreaView,
        StyleSheet,
        Text,
        View,
        TouchableOpacity } from 'react-native';

const url = {
    authorizationEndpoint: 'https://www.reddit.com/api/v1/authorize.compact',
    tokenEndpoint: 'https://www.reddit.com/api/v1/access_token',
};

let islogged = false;

export function LoginScreen({route, navigation}) {
    const {api} = route.params;
    const [tok, setTok] = useState();
    const [request, response, promptAsync] = useAuthRequest(
        {
            extraParams: {
                duration: 'permanent',
            },
            codeChallenge: null,
            codeChallengeMethod: null,
            responseType: 'code',
            clientId: 'MeL-aWBgo600Hi7bvE3Pog',
            scopes: Auth.scopes,
            redirectUri: makeRedirectUri({
                native: 'my.redditech://redirect',
            }),
        },
        url
    );

    useEffect(() => {
        if (response?.type === 'success') {
            const {code} = response.params;
            api.getAccessToken(code).then((token) => {
                setTok(token);
            })
            console.log("auth successfull");
        } else {
            console.log("no auth");
        }
    }, [response]);

    return(
        <SafeAreaView>
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button} onPress={() => promptAsync()}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
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
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50%',
        marginBottom: '10%',
        maxHeight: '20%',
        resizeMode: 'stretch'
    },
    containerButton: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 150,
    },
    button: {
        borderRadius: 20,
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FF5700',
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
});