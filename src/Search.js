/*
** EPITECH PROJECT, 2021
** B-DEV-501-MAR-5-1-redditech-amaury.danis-cousandier
** File description:
** Search.js
*/

import { StyleSheet,
        Text,
        View,
        SafeAreaView,
        ScrollView,
        TouchableOpacity,
        TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export function SearchScreen() {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttons}>
                        <Ionicons name={'ios-thumbs-up'} size={20} color={'white'}/>
                        <Text style={{color: 'white'}}>Best</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons}>
                        <Ionicons name={'ios-flame'} size={20} color={'white'}/>
                        <Text style={{color: 'white'}}>Hot</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons}>
                        <Ionicons name={'ios-time'} size={20} color={'white'}/>
                        <Text style={{color: 'white'}}>New</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons}>
                        <Ionicons name={'ios-arrow-up'} size={20} color={'white'}/>
                        <Text style={{color: 'white'}}>Top</Text>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.textinput}
                        placeholder="Search for Subreddits 🔎"
                        keyboardType="ascii-capable"
                    />
                </View>
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
        marginTop: 20
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
    textinput: {
        height: 40,
        width: 367,
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#b8b8b8'
    }
});