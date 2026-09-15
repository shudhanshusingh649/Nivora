import { StyleSheet, Text, View } from "react-native";

export default function Onboarding() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Nivora</Text>
      <Text style={styles.subtitle}>
        Find Verified PGs, Flats, Rooms & Mess near you.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 24,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#065F46",
  },

  subtitle: {
    marginTop: 15,
    textAlign: "center",
    fontSize: 16,
    color: "#64748B",
  },
});
