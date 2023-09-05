// import React, { useEffect, useState } from 'react';
// import { View, Image, StyleSheet, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// const Drawer = createDrawerNavigator();

// export default function MyDrawer() {
//     const [isLoading, setIsLoading] = useState(true);
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         fetch(' https://mocki.io/v1/d71ac22b-8f1d-4b6a-b241-4b98504997ef  ')
//             .then((response) => response.json())
//             .then((json) => {
//                 setTimeout(() => {
//                     setIsLoading(false);
//                 }, 3000);
//                 setData(json);
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//     }, []);

//     return (
//         <NavigationContainer>
//             <Drawer.Navigator>
//                 <Drawer.Screen name="Informações Pessoais">
//                     {(props) => <InfoPessoal {...props} data={data} isLoading={isLoading} />}
//                 </Drawer.Screen>
//                 <Drawer.Screen name="Experiência">
//                     {(props) => <Experiencia {...props} data={data} isLoading={isLoading} />}
//                 </Drawer.Screen>
//                 <Drawer.Screen name="Formação">
//                     {(props) => <Formacao {...props} data={data} isLoading={isLoading} />}
//                 </Drawer.Screen>
//                 <Drawer.Screen name="Publicações">
//                     {(props) => <Publicacoes {...props} data={data} isLoading={isLoading} />}
//                 </Drawer.Screen>
//             </Drawer.Navigator>
//         </NavigationContainer>
//     );
// }

// function Publicacoes({ data, isLoading }) {
//     return (
//         <View style={styles.container}>
//             <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Publicações</Text>
//             {data.publicacoes.map((item, index) => (
//                 <View key={index}>
//                     <Text style={styles.info}>Título: {item.titulo}</Text>
//                     <Text style={styles.info}>Revista: {item.revista}</Text>
//                     <Text style={styles.info}>Ano: {item.ano_publicacao}</Text>
//                 </View>
//             )
//             )}
//         </View>
//     )
// }

 
// function Formacao({ data, isLoading }) {
//     return (
//         <View style={styles.container}>
//             {data.formacao.map((item, index) => (
//                 <View key={index}>
//                     <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Formação</Text>
//                     <Text style={styles.info}>Curso: {item.curso}</Text>
//                     <Text style={styles.info}>Instituição: {item.instituicao}</Text>
//                     <Text style={styles.info}>Período: {item.periodo}</Text>
//                 </View>
//             ))}
//         </View>
//     )
// }


// function Experiencia({ data, isLoading }) {
//     return (
//         <View style={styles.container}>
//             {isLoading ? (
//                 <Text> Carregando... </Text>
//             ) : (
//                 <View style={styles.container} >
//                     {data.experiencia_profissional.map((item, index) => (
//                         <View key={index}>
//                             <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Experiência</Text>
//                             <Text style={styles.info}>Empresa: {item.empresa}</Text>
//                             <Text style={styles.info}>Cargo: {item.cargo}</Text>
//                             <Text style={styles.info}>Atividades: {item.descricao}</Text>
//                             <Text style={styles.info}>Período: {item.periodo}</Text>

//                         </View>
//                     ))}
//                 </View>
//             )}
//         </View>
//     );
// }

// function InfoPessoal({ data, isLoading }) {
//     return (
//         <View style={styles.container}>
//             {isLoading ? (
//                 <Image
//                     source={require('./spacex.gif')}
//                     style={styles.splash}
//                 />
//             ) : (
//                 <View style={styles.container}>
//                     <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Dados Pessoais</Text>
//                     <Text style={styles.info}>Nome: {data.informacoes_pessoais.nome}</Text>
//                     <Text style={styles.info}>Idade: {data.informacoes_pessoais.idade}</Text>
//                     <Text style={styles.info}>Telefone: {data.informacoes_pessoais.telefone}</Text>
//                     <Text style={styles.info}> Email: {data.informacoes_pessoais.email}</Text>
//                 </View>
//             )}
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     splash: {
//         width: '90%',
//         height: 400,
//         borderRadius: 10,
//     },
//     info: {
//         fontSize: 16,
//         margin: 10,
//     },
// });

import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
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

    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Informações Pessoais">
                    {(props) => <InfoPessoal {...props} data={data} isLoading={isLoading} />}
                </Drawer.Screen>
                <Drawer.Screen name="Experiência">
                    {(props) => <Experiencia {...props} data={data} isLoading={isLoading} />}
                </Drawer.Screen>
                <Drawer.Screen name="Formação">
                    {(props) => <Formacao {...props} data={data} isLoading={isLoading} />}
                </Drawer.Screen>
                <Drawer.Screen name="Publicações">
                    {(props) => <Publicacoes {...props} data={data} isLoading={isLoading} />}
                </Drawer.Screen>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

function Publicacoes({ data, isLoading }) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Publicações</Text>
            {isLoading ? (
                <Image
                    source={require('./spacex.gif')}
                    style={styles.splash}
                />
            ) : (
                data.publicacoes.map((item, index) => (
                    <View key={index}>
                        <Text style={styles.info}>Título: {item.titulo}</Text>
                        <Text style={styles.info}>Revista: {item.revista}</Text>
                        <Text style={styles.info}>Ano: {item.ano_publicacao}</Text>
                    </View>
                ))
            )}
        </View>
    );
}

function Formacao({ data, isLoading }) {
    return (
        <View style={styles.container}>
            {isLoading ? (
                <Image
                    source={require('./spacex.gif')}
                    style={styles.splash}
                />
            ) : (
                data.formacao.map((item, index) => (
                    <View key={index}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Formação</Text>
                        <Text style={styles.info}>Curso: {item.curso}</Text>
                        <Text style={styles.info}>Instituição: {item.instituicao}</Text>
                        <Text style={styles.info}>Período: {item.periodo}</Text>
                    </View>
                ))
            )}
        </View>
    );
}

function Experiencia({ data, isLoading }) {
    return (
        <View style={styles.container}>
            {isLoading ? (
                <Image
                    source={require('./spacex.gif')}
                    style={styles.splash}
                />
            ) : (
                <View style={styles.container} >
                    {data.experiencia_profissional.map((item, index) => (
                        <View key={index}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Experiência</Text>
                            <Text style={styles.info}>Empresa: {item.empresa}</Text>
                            <Text style={styles.info}>Cargo: {item.cargo}</Text>
                            <Text style={styles.info}>Atividades: {item.descricao}</Text>
                            <Text style={styles.info}>Período: {item.periodo}</Text>
                        </View>
                    ))}
                </View>
            )}
        </View>
    );
}

function InfoPessoal({ data, isLoading }) {
    return (
        <View style={styles.container}>
            {isLoading ? (
                <Image
                    source={require('./spacex.gif')}
                    style={styles.splash}
                />
            ) : (
                <View style={styles.container}>
                    <Image source={require('./Elon-musk.webp')} style={{width:150, height: 400}} />
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Dados Pessoais</Text>
                    <Text style={styles.info}>Nome: {data.informacoes_pessoais.nome}</Text>
                    <Text style={styles.info}>Idade: {data.informacoes_pessoais.idade}</Text>
                    <Text style={styles.info}>Telefone: {data.informacoes_pessoais.telefone}</Text>
                    <Text style={styles.info}>Email: {data.informacoes_pessoais.email}</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
