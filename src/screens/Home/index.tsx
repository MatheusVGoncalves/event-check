import { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";


export function Home() {

    const [participants, setParticipants] = useState<string[]>([]);
    const [newParticipant, setNewParticipant] = useState('');

    const hadleParticipantAdd = () => {
        if(participants.includes(newParticipant)){
            Alert.alert("Participante Existe", "Já existe um participante na lista com esse nome");
            return;
        }

        setParticipants((prev) => [...prev, newParticipant])
        setNewParticipant('')
    }

    const hadleParticipantRemove = (name: string) => {
        Alert.alert("Remover", `Remover o participanete: ${name}?`, [
            {
                text: 'Sim',
                onPress: () => {
                    setParticipants(prev => prev.filter(participant => participant !== name))
                    Alert.alert("Deletado com sucesso!")
                }
            },
            {
                text: 'Não',
                style: "cancel"
                
            }
        ])
    }


  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>Evento: Japão 2024</Text>
      <Text style={styles.eventDate}>A partir de 05/04/2024</Text>

      <View style={styles.form}>

      <TextInput 
      style={styles.input}
      placeholder="Nome do participante"
      placeholderTextColor="#6B6B6B"
      onChangeText={(e) => setNewParticipant(e)}
      value={newParticipant}
      //keyboardType="numeric" OPÇÃO DE TECLADO NUMÉRICO
      />

      <TouchableOpacity style={styles.button} onPress={hadleParticipantAdd}>
        <Text style={styles.buttonText}>
            +
        </Text>
      </TouchableOpacity>
      </View>
      

    {/*     

    A ScrollView carrega todos itens de uma vez, já a FlatList só irá renderizar o que cabe na tela

        <ScrollView showsVerticalScrollIndicator={false}>
      {
        participants.map((participant, index) => (
            <Participant 
            key={index} 
            name={participant} 
            onRemove={hadleParticipantRemove}/>
        ))
      }
      </ScrollView> */}

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
            <Participant 
            key={item} 
            name={item} 
            onRemove={() => hadleParticipantRemove(item)}/>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
            <Text style={styles.listEmptyText}>
                Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença
            </Text>
        )}
      />

    </View>
  )
}