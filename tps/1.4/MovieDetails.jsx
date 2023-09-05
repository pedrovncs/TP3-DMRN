import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function MovieDetails({ route }) {
    const { item } = route.params

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image style={styles.poster} source={{ uri: item.imagem }} />
                <Text style={styles.title}>{item.nome}</Text>
                <Text style={styles.director}>{item.diretor}</Text>
                <Text style={styles.localName}>{item.local}</Text>
                <View style={styles.flexRow}>
                    {item.horarios.map(horario => {
                        return (
                            <TouchableOpacity style={styles.iconTime}>
                                <Text style={{ color: '#fff' }}>{horario}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center',
        margin: 'auto',
    },
    container: {
        backgroundColor: '#fff',
        margin: "auto",
        justifyContent: 'center',
        padding: 20,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        width: 250,
        height: 500,
        alignItems: 'center',
    },
    poster: {
        width: 200,
        height: 300,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
    },
    iconTime: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        boxShadow: '1 1 8px rgba(0,0,0,0.5)',
        backgroundColor: '#f45f1e',
    },
    localName: {
        fontSize: 15,
        fontWeight: 'bold',
        margin: 10,
    },
    flexRow: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-around',
    },
    director: {
        fontSize: 15,
        fontWeight: 'medium',
        fontStyle: 'italic',
        margin: 10
    }
}
)