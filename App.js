import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Header from "./components/Header";

const profile = {
  name: "Tiago",
  role: "Desenvolvedor Mobile em formação",
  city: "Blumenau",
  email: "tiagoeduardobr@gmail.com",
  avatarUrl: "https://github.com/tiagoeduardobr.png",
  bio: "Estudante de desenvolvimento mobile, aprendendo a criar experiências úteis e acessíveis com React Native. Sempre aberto a novos desafios e oportunidades para evoluir.",
  skills: ["JavaScript", "React Native", "Expo", "Git e GitHub"],
  isAvailable: true,
};

export default function App() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.eyebrow}>MEU PERFIL DEV</Text>

      <Header
        avatarUrl={profile.avatarUrl}
        name={profile.name}
        role={profile.role}
      />

      <Text style={styles.location}>{profile.city}</Text>
      <Text style={styles.availability}>
        {profile.isAvailable
          ? "Disponível para projetos"
          : "Indisponível para projetos"}
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sobre mim</Text>
        <Text style={styles.bio} numberOfLines={3}>
          {profile.bio}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Habilidades</Text>
        <View style={styles.skillsList}>
          {profile.skills.map((skill) => (
            <View key={skill} style={styles.skillChip}>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>
      </View>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Entrar em contato por e-mail"
        onPress={() => Alert.alert("Entre em contato", profile.email)}
        style={({ pressed }) => [
          styles.contactButton,
          pressed && styles.contactButtonPressed,
        ]}
      >
        <Text style={styles.contactButtonText}>Entrar em contato</Text>
      </Pressable>

      <StatusBar style="light" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101827",
  },
  content: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  eyebrow: {
    color: "#8ea3bd",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 2,
    marginBottom: 24,
  },
  location: {
    color: "#38bdf8",
    fontSize: 15,
    marginTop: 12,
  },
  availability: {
    color: "#86efac",
    fontSize: 14,
    marginTop: 12,
  },
  section: {
    alignSelf: "stretch",
    marginTop: 32,
  },
  sectionTitle: {
    color: "#f8fafc",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
  },
  bio: {
    color: "#cbd5e1",
    fontSize: 15,
    lineHeight: 23,
  },
  skillsList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  skillChip: {
    backgroundColor: "#1e293b",
    borderColor: "#334155",
    borderRadius: 16,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  skillText: {
    color: "#cbd5e1",
    fontSize: 14,
  },
  contactButton: {
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "#0284c7",
    borderRadius: 12,
    marginTop: 32,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  contactButtonPressed: {
    backgroundColor: "#0369a1",
  },
  contactButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
});
