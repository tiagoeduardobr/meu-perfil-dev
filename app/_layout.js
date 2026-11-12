// app/_layout.js
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#4D7C2A" },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Início" }} />
      <Stack.Screen
        name="habilidades/index"
        options={{ title: "Habilidades" }}
      />
      <Stack.Screen name="habilidades/[id]" options={{ title: "Habilidade" }} />
      <Stack.Screen name="recados" options={{ title: "Recados" }} />
    </Stack>
  );
}
