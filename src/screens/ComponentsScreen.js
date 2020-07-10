import  React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const GenerateGreeting = ({children}) => <Text style={styles.body}>{children}</Text>;

const ComponentsScreen = () => {
    return (
        <View>
            <Text style={styles.title}>Hi,</Text>
            <GenerateGreeting>
                James
            </GenerateGreeting>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 40
    },
    body: {
        fontSize: 25
    }
});

export default ComponentsScreen;
