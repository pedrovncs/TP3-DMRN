import React, { useState } from "react";
import { View, Text, TextInput, FlatList, StyleSheet, Button } from "react-native";
import list from './list.json'

export default function Tp1() {
    const [sortedList, setSortedList] = useState([...list]);
    const [isSorted, setIsSorted] = useState(false);

    const handleNota = () => {
        const sorted = [...sortedList].sort((a, b) => {
            if (isSorted) {
                return a.nota - b.nota;
            } else {
                return b.nota - a.nota;
            }
        });
        setSortedList(sorted);
        setIsSorted(!isSorted);
    }

    const handleNome = () => {
        const sorted = [...sortedList].sort((a, b) => {
            if (isSorted) {
                return a.titulo.localeCompare(b.titulo); 
            } else {
                return b.titulo.localeCompare(a.titulo); 
            }
        });
        setSortedList(sorted);
        setIsSorted(!isSorted);
    }


    return (
        <View style={styles.container}>
            <Text style={styles.mainTitle}> Jogos com as maiores notas no Metacritic </Text>
            <View style={styles.flexRow}>
                <Button  title="Ordenar por nota" onPress={handleNota}/>
                <Button  title="Ordenar por nome" onPress={handleNome}/>    
            </View>
            
            <FlatList
                data={sortedList.length > 0 ? sortedList : list}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => {
                    return (
                        <View style={styles.li}>
                            <Text style={styles.title}>{item.titulo}</Text>
                            <View style={item.nota > 80 ? styles.good : item.nota > 60 ? styles.average : styles.bad}>
                            <Text style={styles.nota}>{item.nota}</Text>
                            </View>
                            <Text style={styles.info}>{item.plataforma}</Text>
                            <Text style={styles.info}>{item.genero}</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 40,
        margin: 'auto',
    },
    li: {
        padding: 10,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#333",
        borderRadius: 5,
        marginBottom: 10,
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
    },
    nota: {
        width: 30,
        height: 30,
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        marginTop: 5,
        lineHeight: 21,
        textAlign: "center",
        
    },
    good: {
        width: 30,
        height: 30,
        backgroundColor: "green",
        borderRadius: '50%',
        marginBottom: 10,
    },
    average: {
        width: 30,
        height: 30,
        backgroundColor: "#f4c010",
        borderRadius: '50%',
        marginBottom: 10,
    },  
    bad: {
        width: 30,
        height: 30,
        backgroundColor: "red",
        borderRadius: '50%',
        marginBottom: 10,
    },
    info: {
        fontSize: 14,
        color: "#999",
        marginTop: 5,
        lineHeight: 24,
    },
    flexRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginBottom: 10,
    },
    input: {
        width: "80%",
        padding: 10,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#333",
        borderRadius: 5,
    },
    mainTitle: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
    },
    button: {
        width: "20%",
        padding: 10,
        backgroundColor: "#f00",
        borderWidth: 1,
        borderColor: "#333",
        borderRadius: 5,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
    },
    warning: {
        color: "#f00",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
    },
})


