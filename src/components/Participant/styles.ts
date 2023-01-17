import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      width: "100%",
      backgroundColor: '#1F1E25',
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: "center",
      borderRadius: 5,
      padding: 8,
      marginBottom: 8
    },
    name: {
        color: '#FFF',
        flex: 1,
        fontSize: 16,
        marginLeft: 12

    },
    buttonText: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold'
    },
    button: {
        width: 42,
        height: 42,
        borderRadius: 5,
        backgroundColor: '#E23C44',
        alignItems: "center",
        justifyContent: 'center'
    },
  });