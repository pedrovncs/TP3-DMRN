import { FlatList, StyleSheet, Text, View, Image, Touchable, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MovieDetails from './MovieDetails';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();


export default function MyStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Lista de filmes" component={App} />
                <Stack.Screen name="Detalhes" component={MovieDetails} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}

function App() {
    const [movieData, setMovieData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const navigation = useNavigation();


    useEffect(() => {
        const fetchMovies = async () => {
            setIsLoading(true);
            fetch(`https://mocki.io/v1/6187aa5e-3caa-459d-baa4-bc27dcbb4c77 `, {
                method: 'GET'
            })
                .then(response => response.json())
                .then(data => {
                    setMovieData(data);
                    console.log(data)
                    setIsLoading(false);
                })
                .catch(error => {
                    setMovieData(null);
                    console.error('Erro ao buscar:', error);
                    setIsLoading(false);
                });
        };

        fetchMovies();
    }, [])


    const renderMovies = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Detalhes', { item })}>
            <View style={styles.movieCard}>
                <Text style={styles.movieTitle}>{item.nome}</Text>
                <Image source={{ uri: item.imagem }} style={styles.poster} />
            </View>
        </TouchableOpacity>
    );


    return (
        <View style={styles.container}>
            <Text>Lista de filmes</Text>
            {isLoading
                ? <Text style={styles.warning}>Carregando...</Text>
                :
                <View>
                    <FlatList
                        data={movieData}
                        renderItem={renderMovies}
                        keyExtractor={movie => movie.id}
                    />
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
    },
    movieCard: {
        backgroundColor: '#fff',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    movieTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    poster: {
        width: 200,
        height: 200,
    },
})