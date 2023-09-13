import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { View, TextField, Text, Button, Image } from 'react-native-ui-lib';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Welcome!</Text>
            <StatusBar style="auto" />

            <Button label="Next" onPress={() => console.log('clicked')}></Button>
            <Card.Image source={{ uri: 'https://github.com/wix/react-native-ui-lib/blob/master/demo/src/assets/images/card-example.jpg' }} height={115} />
            <Slider
                value={0}
                minimumValue={0}
                maximumValue={10}
                onValueChange={() => console.log('value changed')}
            />
            <Switch value={false} onValueChange={() => console.log('value changed')} />
            <Avatar source={{ uri: 'https://lh3.googleusercontent.com/-cw77lUnOvmI/AAAAAAAAAAI/AAAAAAAAAAA/WMNck32dKbc/s181-c/104220521160525129167.jpg' }} label={IT} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
