import { Alert, Button, StyleSheet, Text, View } from "react-native";

const nome = "Tiago";
const cargo = "Desenvolvedor Mobile em formação";
const cidade = "Blumenau";
const email = "tiagoeduardobr@gmail.com";
const disponivel = true;

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.eyebrow}>MEU PERFIL DEV</Text>
      <Text style={styles.name}>{nome}</Text>
      <Text style={styles.role}>{cargo}</Text>
      <Text style={styles.location}>{cidade}</Text>
      <Text style={styles.availability}>
        {disponivel ? "Disponível para projetos" : "Indisponível para projetos"}
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Entrar em contato"
          onPress={() => Alert.alert("Entre em contato", email)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101827",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  eyebrow: {
    color: "#8ea3bd",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 2,
    marginBottom: 16,
  },
  name: {
    color: "#f8fafc",
    fontSize: 36,
    fontWeight: "700",
    textAlign: "center",
  },
  role: {
    color: "#cbd5e1",
    fontSize: 16,
    marginTop: 12,
    textAlign: "center",
  },
  location: {
    color: "#38bdf8",
    fontSize: 15,
    marginTop: 8,
  },
  availability: {
    color: "#86efac",
    fontSize: 14,
    marginTop: 16,
  },
  buttonContainer: {
    marginTop: 24,
  },
});
