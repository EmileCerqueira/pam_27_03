import CustomButton from "@/components/Title";
import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
    const name = "Emile";

    const [count, setCount] = useState(0);
    const [nome, setNome] = useState (name);

    

    return(
        <View style={{flex: 1, justifyContent:"center", alignItems:"center"}}>
            <Text>Bem-vindo ao App {nome}!</Text>

            <Text>Contador: {count}</Text>
            <Button title="Aumentar" onPress={() => {setCount(count + 1)}}/>
            <Button title="Diminuir" onPress={() => {setCount(count - 1)}}/>
            <Button title="Resetar" onPress={() => {setCount(- 0)}}/>

        <TextInput placeholder="Digite Algo" onChangeText={setNome}/>

            <CustomButton title="Botão vermelho" onPress={() =>{setNome("Emile" + count)}}/>
                
        </View>
    );

}