import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Text, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://mocki.io/v1/d71ac22b-8f1d-4b6a-b241-4b98504997ef')
            .then((response) => response.json())
            .then((json) => {
                setTimeout(() => {
                    setIsLoading(false);
                }, 3000);
                setData(json);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    if (isLoading) {
        return (
            <View style={styles.container}>
                <Image
                    source={require('./spacex.gif')}
                    style={styles.splash}
                />
            </View>
        );
    }

    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen
                    name="Informações Pessoais"
                    component={() => <InfoPessoal data={data.informacoes_pessoais} />}
                />
                <Drawer.Screen
                    name="Experiência"
                    component={() => <Experiencia data={data.experiencia_profissional} />}
                />
                <Drawer.Screen
                    name="Formação"
                    component={() => <Formacao data={data.formacao} />}
                />
                <Drawer.Screen
                    name="Cursos"
                    component={() => <Cursos data={data.cursos} />}
                />
                <Drawer.Screen
                    name="Publicações"
                    component={() => <Publicacoes data={data.publicacoes} />}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

function SplashScreen() {
    return (
        <View style={styles.container}>
            <Image
                source={require('./spacex.gif')}
                style={styles.splash}
            />
        </View>
    );
}

function Publicacoes({ data }) {
    return (
        <ScrollView style={styles.container}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Publicações</Text>
            {data.map((item, index) => (
                <View key={index}>
                    <Text style={styles.info}>Título: {item.titulo}</Text>
                    <Text style={styles.info}>Revista: {item.revista}</Text>
                    <Text style={styles.info}>Ano de Publicação: {item.ano_publicacao}</Text>
                </View>
            ))}
        </ScrollView>
    );
}

function Formacao({ data }) {
    return (
        <ScrollView style={styles.container}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Formação</Text>
            {data.map((item, index) => (
                <View key={index}>
                    <Text style={styles.info}>Curso: {item.curso}</Text>
                    <Text style={styles.info}>Instituição: {item.instituicao}</Text>
                    <Text style={styles.info}>Ano de Conclusão: {item.ano_conclusao}</Text>
                </View>
            ))}
        </ScrollView>
    );
}

function Experiencia({ data }) {
    return (
        <ScrollView style={styles.container}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Experiência</Text>
            {data.map((item, index) => (
                <View key={index}>
                    <Text style={styles.info}>Empresa: {item.empresa}</Text>
                    <Text style={styles.info}>Cargo: {item.cargo}</Text>
                    <Text style={styles.info}>Atividades: {item.descricao}</Text>
                    <Text style={styles.info}>Período: {item.periodo}</Text>
                </View>
            ))}
        </ScrollView>
    );
}

function InfoPessoal({ data }) {
    return (
        <ScrollView style={styles.container}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Dados Pessoais</Text>
            <Text style={styles.info}>Nome: {data.nome}</Text>
            <Text style={styles.info}>Idade: {data.idade}</Text>
            <Text style={styles.info}>Telefone: {data.telefone}</Text>
            <Text style={styles.info}>Email: {data.email}</Text>
        </ScrollView>
    );
}

function Cursos({ data }) {
    return (
        <ScrollView style={styles.container}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Cursos</Text>
            {data.map((item, index) => (
                <View key={index}>
                    <Text style={styles.info}>Nome do Curso: {item.nome}</Text>
                    <Text style={styles.info}>Instituição: {item.instituicao}</Text>
                    <Text style={styles.info}>Ano de Conclusão: {item.ano_conclusao}</Text>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    splash: {
        width: '90%',
        height: 400,
        borderRadius: 10,
    },
    info: {
        fontSize: 16,
        margin: 10,
    },
});
