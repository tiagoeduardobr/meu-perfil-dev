import { Image, StyleSheet, Text, View } from "react-native";

export default function Header({ avatarUrl, name, role }) {
  return (
    <View style={styles.container}>
      <Image
        accessibilityLabel={`Foto de perfil de ${name}`}
        source={{ uri: avatarUrl }}
        style={styles.photo}
      />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.role}>{role}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  photo: {
    backgroundColor: "#1e293b",
    borderColor: "#38bdf8",
    borderRadius: 64,
    borderWidth: 4,
    height: 128,
    marginBottom: 20,
    width: 128,
  },
  name: {
    color: "#f8fafc",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
  },
  role: {
    color: "#cbd5e1",
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
  },
});
