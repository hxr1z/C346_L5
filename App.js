import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert, TouchableOpacity, Image, ToastAndroid} from 'react-native';
import {Picker} from '@react-native-picker/picker';

//Define own custom component
const InputBox = ({label, onChangeText}) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput style={{borderWidth: 1}} onChangeText={onChangeText}/>
        </View>
    )
}

const MyApp = () => {
    const [pw, setPw] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('');

    return (
        <View style={{marginTop: 40}}>
            <Text>User Type:</Text>


            <Picker onValueChange={(value) => setType(value)}>
                <Picker.Item label= 'Admin' value= 'Admin' />
                <Picker.Item label= 'Guest' value= 'Guest' />
            </Picker>

            {/*<Text>Username:</Text>*/}
            {/*<TextInput style={{borderWidth: 1}} onChangeText={(text) => setName(text)} />*/}

            {/*<Text>Password:</Text>*/}
            {/*<TextInput style={{borderWidth: 1}} onChangeText={(text) => setPw(text)} />*/}

            <InputBox label='Username:' onChangeText={text => setName(text)} />
            <InputBox label='Password:' onChangeText={text => setPw(text)} />

            {/*<Button title='LOG IN' onPress={() => {*/}
            {/*    Alert.alert('Welcome!')*/}
            {/*}} />*/}

            <TouchableOpacity
                // style={{margin:5, backgroundColor:'skyblue', height:50, justifyContent:'center', alignItems: 'center'}}
                onPress={() => {
                // Alert.alert('Welcome!')
                    const correctPassword = '123';
                    let mymessage = 'Error! Wrong Password!';
                    if (pw == correctPassword) {
                        mymessage = 'Welcome ' + type + ' ' + name;
                    }
                    ToastAndroid.show(mymessage, ToastAndroid.SHORT);
            }}>
                {/*<Text*/}
                {/*    >LOG IN</Text>*/}
                <Image
                    source={{uri:'https://media.makeameme.org/created/lets-go-click.jpg'}}
                    style={{width: 200, height: 200,}}
                    />
            </TouchableOpacity>
            <Text>{pw}</Text>
        </View>
    );
};

export default MyApp;
