import { useState } from "react"
import { Stack } from 'expo-router';
import { StyleSheet, Text, TextInput, View } from "react-native";
import Colors from '../../constants/Colors';
import Button from "@/src/components/Button";



const SignUpScreen = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: 'Join Palorant'}} />
            <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email address"
            style={styles.input}
            />
            <TextInput
            value={username}
            onChangeText={setUsername}
            placeholder="Username"
            style={styles.input}
            />
            <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            style={styles.input}
            secureTextEntry
            />
            <Text>Must be at least 8 characters</Text>
            <Text>Contains at least one letter and one number</Text>
            <Text>Includes upper and lower case letters</Text>
            <TextInput
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirm Password"
            style={styles.input}
            secureTextEntry
            />
            <Button text="Create account" />


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      padding: 20,
      justifyContent: 'center',
      flex: 1,
    },
    label: {
      color: 'gray',
    },
    input: {
      borderWidth: 1,
      borderColor: 'gray',
      padding: 10,
      marginTop: 5,
      marginBottom: 20,
      backgroundColor: 'white',
      borderRadius: 5,
    },
    textButton: {
      alignSelf: 'center',
      fontWeight: 'bold',
      color: Colors.light.tint,
      marginVertical: 10,
    },
  });

export default SignUpScreen;
