import React, { useState } from "react";
import { View, Text, TextInput, FlatList, StyleSheet, Button } from "react-native";
import list from './list.json'

export default function Tp1() {
    const [inputSearch, setInputSearch] = useState("");
    const [notFound, setNotFound] = useState(false);
    const [filteredList, setFilteredList] = useState([]);

    const handleFilter = (e) => {
        setInputSearch(e.target.value);
        const filteredList = list.filter((item) =>
            item.nome.toLowerCase().includes(inputSearch.toLowerCase())
        );
        if (filteredList.length === 0) {
            setNotFound(true);
        } else {
            setNotFound(false);
        }
        setFilteredList(filteredList);
    }

    return (
        <View style={styles.container}>
            <View style={styles.flexRow}>
                <TextInput style={styles.input} placeholder="Pesquisar um filme.."
                    value={inputSearch} onChange={handleFilter} />
            </View>
            <Text style={styles.mainTitle}> Vencedores do Oscar de Melhor Filme 2006 - 2020 </Text>
            {notFound && <Text style={styles.warning}>Nenhum filme encontrado</Text>}
            <FlatList
                data={inputSearch != '' ? filteredList : list}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => {
                    return (
                        <View style={styles.li}>
                            <Text style={styles.title}>{item.nome}</Text>
                            <Text style={styles.nome}>{item.diretor}</Text>
                            <Text style={styles.info}>{item.ano}</Text>
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
    nome: {
        fontSize: 16,
        color: "#333",
        marginTop: 5,
        lineHeight: 21,
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
        justifyContent: "center",
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


