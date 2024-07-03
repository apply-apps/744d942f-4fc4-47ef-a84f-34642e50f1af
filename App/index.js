// Filename: index.js
// Combined code from all files
import React from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, TouchableOpacity, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const stories = [
    { id: '1', title: 'The Fox and the Grapes', snippet: 'A hungry fox saw some fine bunches of grapes...', fullStory: 'A hungry fox saw some fine bunches of grapes hanging from a vine. He did his best to reach them by jumping as high as he could into the air, but it was all in vain, for they were just out of reach: so he gave up trying and walked away with an air of dignity and unconcern, remarking, "I thought those Grapes were ripe, but I see now they are quite sour."' },
    { id: '2', title: 'The Tortoise and the Hare', snippet: 'A Hare was making fun of the Tortoise...', fullStory: 'A Hare was making fun of the Tortoise one day for being so slow. "Do you ever get anywhere?" he asked with a mocking laugh. "Yes," replied the Tortoise, "and I get there sooner than you think. I’ll run you a race and prove it." The Hare was much amused at the idea of running a race with the Tortoise, but the real fun was when he saw how easily he would be able to beat the slow Tortoise. Off went the Hare, leaving the Tortoise far behind. But the running Tortoise didn’t lose heart and kept walking steadily. After some time, the Hare got tired and decided to take a nap. The Tortoise kept on walking slowly and steadily. When the Hare woke up, he saw the Tortoise nearing the finish line and couldn’t catch up in time. The Tortoise smiled as he crossed the finish line, proving that slow and steady wins the race.' },
];

function HomeScreen({ navigation }) {
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('StoryDetails', { story: item })} style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.snippet}>{item.snippet}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={stories}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
            />
        </SafeAreaView>
    );
}

const StoryDetails = ({ route }) => {
    const { story } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Text style={styles.title}>{story.title}</Text>
                <Text style={styles.fullStory}>{story.fullStory}</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Bedtime Stories', headerStyle: styles.header, headerTitleStyle: styles.headerTitle }} />
                <Stack.Screen name="StoryDetails" component={StoryDetails} options={{ title: 'Story Details', headerStyle: styles.header, headerTitleStyle: styles.headerTitle }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    header: {
        backgroundColor: '#181818',
    },
    headerTitle: {
        color: '#fff',
    },
    list: {
        padding: 10,
    },
    item: {
        backgroundColor: '#1e1e1e',
        padding: 20,
        marginVertical: 8,
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        color: '#ffffff',
    },
    snippet: {
        fontSize: 14,
        color: '#888888',
        marginTop: 4,
    },
    scrollView: {
        padding: 20,
    },
    fullStory: {
        fontSize: 16,
        color: '#eeeeee',
    },
});