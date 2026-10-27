import { useState } from "react";
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

const MAX_RECOMMENDATIONS = 10;

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
  const [recommendations, setRecommendations] = useState(0);
  const [isAvailable, setIsAvailable] = useState(profile.isAvailable);
  const [showSkills, setShowSkills] = useState(true);

  const handleRecommend = () => {
    setRecommendations((currentCount) =>
      Math.min(currentCount + 1, MAX_RECOMMENDATIONS),
    );
  };

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
        {isAvailable
          ? "Disponível para projetos"
          : "Indisponível para projetos"}
      </Text>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Alternar disponibilidade para projetos"
        accessibilityState={{ checked: isAvailable }}
        onPress={() => setIsAvailable((currentValue) => !currentValue)}
        style={({ pressed }) => [
          styles.stateButton,
          isAvailable ? styles.stateAvailable : styles.stateUnavailable,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={styles.stateButtonText}>
          {isAvailable ? "Disponível" : "Indisponível"}
        </Text>
      </Pressable>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sobre mim</Text>
        <Text style={styles.bio} numberOfLines={3}>
          {profile.bio}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Habilidades</Text>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={
            showSkills ? "Esconder habilidades" : "Mostrar habilidades"
          }
          onPress={() => setShowSkills((currentValue) => !currentValue)}
          style={({ pressed }) => [
            styles.actionButton,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.actionButtonText}>
            {showSkills ? "Esconder habilidades" : "Mostrar habilidades"}
          </Text>
        </Pressable>
        {showSkills && (
          <View style={styles.skillsList}>
            {profile.skills.map((skill) => (
              <View key={skill} style={styles.skillChip}>
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recomendações</Text>
        <Text style={styles.recommendationCount}>
          {recommendations} recomendações
        </Text>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Recomendar este perfil"
          accessibilityState={{
            disabled: recommendations >= MAX_RECOMMENDATIONS,
          }}
          disabled={recommendations >= MAX_RECOMMENDATIONS}
          onPress={handleRecommend}
          style={({ pressed }) => [
            styles.actionButton,
            pressed && styles.buttonPressed,
            recommendations >= MAX_RECOMMENDATIONS && styles.buttonDisabled,
          ]}
        >
          <Text style={styles.actionButtonText}>Recomendar</Text>
        </Pressable>
        {recommendations >= MAX_RECOMMENDATIONS && (
          <Text style={styles.limitMessage}>Limite atingido!</Text>
        )}
      </View>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Entrar em contato por e-mail"
        onPress={() => Alert.alert("Entre em contato", profile.email)}
        style={({ pressed }) => [
          styles.contactButton,
          pressed && styles.buttonPressed,
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
  stateButton: {
    alignItems: "center",
    borderRadius: 20,
    marginTop: 12,
    paddingHorizontal: 18,
    paddingVertical: 9,
  },
  stateAvailable: {
    backgroundColor: "#14532d",
  },
  stateUnavailable: {
    backgroundColor: "#7f1d1d",
  },
  stateButtonText: {
    color: "#dcfce7",
    fontSize: 14,
    fontWeight: "700",
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
  actionButton: {
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "#1d4ed8",
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 13,
  },
  buttonPressed: {
    opacity: 0.75,
  },
  buttonDisabled: {
    backgroundColor: "#475569",
  },
  actionButtonText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "700",
  },
  skillsList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 16,
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
  recommendationCount: {
    color: "#cbd5e1",
    fontSize: 16,
    marginBottom: 12,
  },
  limitMessage: {
    color: "#fda4af",
    fontSize: 14,
    fontWeight: "700",
    marginTop: 12,
    textAlign: "center",
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
  contactButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
});
