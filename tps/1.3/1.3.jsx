import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function App() {
    const [pokemonData, setPokemonData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [pokeName, setPokeName] = useState('ditto');
    const [inputValue, setInputValue] = useState('ditto');

    useEffect(() => {
        fetchPokemon(pokeName);
    }, [pokeName]);

    const fetchPokemon = async (name) => {
        setIsLoading(true);
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(data => {
            setPokemonData(data);
            setIsLoading(false);
        })
        .catch(error => {
            setPokemonData(null);
            console.error('Erro ao buscar Pokémon:', error);
            setIsLoading(false);
        });
    };

    const handleSearch = () => {
        fetchPokemon(inputValue.toLowerCase());
    };

    return (
        <View style={{ margin: 'auto' }}>
            <View style={styles.flexRow}>
                <TextInput
                    style={styles.input}
                    value={inputValue}
                    onChangeText={text => setInputValue(text)}
                    onSubmitEditing={handleSearch}
                />
                <Button
                    title="Pesquisar"
                    onPress={handleSearch}
                />
            </View>
            {isLoading
                ? <Text style={styles.warning}>Carregando...</Text>
                :
                pokemonData != null
                    ?
                    <View style={styles.pokemonCard}>
                        <Text style={styles.pokemonName}>{pokemonData.name}</Text>
                        <Text style={styles.pokemonInfo}>#{pokemonData.id}</Text>
                        <Text style={styles.pokemonInfo}>{pokemonData.types[0].type.name}</Text>
                        {pokemonData.types[1] ? <Text style={styles.pokemonInfo}>{pokemonData.types[1].type.name}</Text> : null}
                        <Image source={{ uri: pokemonData.sprites.front_default }} style={{ width: 200, height: 200 }} />
                    </View>
                    : <Text style={styles.warning}>Pokémon não encontrado</Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    warning: {
        textAlign: 'center',
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold',
    },
    pokemonCard: {
        backgroundColor: '#fff',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 10,
    },
    pokemonName: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        borderRadius: 10,
    },
    pokemonInfo: {
        fontSize: 15,
        textAlign: 'center',
        color: '#999',
    },
});
