/*
** EPITECH PROJECT, 2021
** B-DEV-501-MAR-5-1-redditech-amaury.danis-cousandier
** File description:
** Settings.js
*/

import React from 'react';
import { useEffect, useState } from 'react';
import { Picker } from '@react-native-picker/picker'
import { useIsFocused } from '@react-navigation/native';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Switch } from 'react-native';

export function SettingsScreen({route, nav}) {
    const {api} = route.params;
    const [data, setData] = useState();
    const focusPocus = useIsFocused();
    let [labelNsfw, setLabelNsfw] = useState(false);
    let [vidAutoplay, setvidAutoplay] = useState(false);
    let [showPresence, setShowPresence] = useState(false);
    let [emailChat, setEmailChat] = useState(false);
    let [emailPost, setEmailPost] = useState(false);
    let [emailMention, setEmailMention] = useState(false);
    let [lang, setLang] = useState();

    useEffect(() => {
        if (focusPocus) {
            api.makeRequest('https://oauth.reddit.com/api/v1/prefs').then(data => {
                console.log(data)
                setData(data);
                setLabelNsfw(data.label_nsfw);
                setvidAutoplay(data.video_autoplay);
                setShowPresence(data.show_presence);
                setEmailChat(data.email_chat_request);
                setEmailPost(data.email_post_reply);
                setEmailMention(data.email_username_mention);
                setLang(data.lang);
            })
        }
    }, [focusPocus]);

    const changeLabelNsfw = async () => {
        data.label_nsfw = !labelNsfw;
        setLabelNsfw(data.label_nsfw);
        await api.patchRequest('https://oauth.reddit.com/api/v1/prefs', data);
    };

    const changeVidAutoplay = async () => {
        data.video_autoplay = !vidAutoplay;
        setvidAutoplay(data.video_autoplay);
        await api.patchRequest('https://oauth.reddit.com/api/v1/prefs', data);
    }

    const changeShowPresence = async () => {
        data.show_presence = !showPresence;
        setShowPresence(data.show_presence);
        await api.patchRequest('https://oauth.reddit.com/api/v1/prefs', data);
    }

    const changeEmailChat = async () => {
        data.email_chat_request = !emailChat;
        setEmailChat(data.email_chat_request);
        await api.patchRequest('https://oauth.reddit.com/api/v1/prefs', data);
    }

    const changeEmailPostRep = async () => {
        data.email_post_reply = !emailPost;
        setEmailPost(data.email_post_reply);
        await api.patchRequest('https://oauth.reddit.com/api/v1/prefs', data);
    }

    const changeEmailMention = async () => {
        data.email_username_mention = !emailMention;
        setEmailMention(data.email_username_mention);
        await api.patchRequest('https://oauth.reddit.com/api/v1/prefs', data);
    }

    const changeLang = async (haha) => {
        data.lang = haha;
        setLang(data.lang);
        await api.patchRequest('https://oauth.reddit.com/api/v1/prefs', data);
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.sah}>
                    <View style={styles.container}>
                        <Text style={styles.title}>NSFW Label</Text>
                        <Switch
                            trackColor={{false: "gray", true: "#ff9963"}}
                            thumbColor={labelNsfw ? "#FF5700" : "#b8b8b8"}
                            onValueChange={changeLabelNsfw}
                            value={labelNsfw}
                        />
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.title}>Play video auto</Text>
                        <Switch
                            trackColor={{false: "gray", true: "#ff9963"}}
                            thumbColor={vidAutoplay ? "#FF5700" : "#b8b8b8"}
                            onValueChange={changeVidAutoplay}
                            value={vidAutoplay}
                        />
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.title}>Show presence</Text>
                        <Switch
                            trackColor={{false: "gray", true: "#ff9963"}}
                            thumbColor={showPresence ? "#FF5700" : "#b8b8b8"}
                            onValueChange={changeShowPresence}
                            value={showPresence}
                        />
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.title}>Email chat request</Text>
                        <Switch
                            trackColor={{false: "gray", true: "#ff9963"}}
                            thumbColor={emailChat ? "#FF5700" : "#b8b8b8"}
                            onValueChange={changeEmailChat}
                            value={emailChat}
                        />
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.title}>Email post reply</Text>
                        <Switch
                            trackColor={{false: "gray", true: "#ff9963"}}
                            thumbColor={emailPost ? "#FF5700" : "#b8b8b8"}
                            onValueChange={changeEmailPostRep}
                            value={emailPost}
                        />
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.title}>Email user mention</Text>
                        <Switch
                            trackColor={{false: "gray", true: "#ff9963"}}
                            thumbColor={emailMention ? "#FF5700" : "#b8b8b8"}
                            onValueChange={changeEmailMention}
                            value={emailMention}
                        />
                    </View>

                </View>
                <View style={styles.lang}>
                    <Text style={styles.title}>Language</Text>
                    <Picker selectedValue={lang}
                            style={{ height: 50, width: 150}}
                            onValueChange={(itemValue, itemIndex) => changeLang(itemValue)}>
                                <Picker.Item label="Français" value="fr"/>
                                <Picker.Item label="English" value="en"/>
                                <Picker.Item label="Italiano" value="it"/>
                    </Picker>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    sah: {
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#ffd0b8',
        borderRadius: 10,
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingVertical: 15,
        justifyContent: 'space-around'
    },
    containerTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10%'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    lang: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80,
        backgroundColor: '#ffd0b8',
        borderRadius: 10,
        marginHorizontal: 100,
        paddingVertical: 10
    }
});