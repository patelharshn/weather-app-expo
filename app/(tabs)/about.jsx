import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";

export default function TabTwoScreen() {
  return (
    <View>
      {/* Main title */}
      <Text style={styles.titleContainer}>About Us</Text>

      {/* My Information */}
      <View style={styles.card}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000" }}>
          My Information
        </Text>
        <Text style={{ fontSize: 16, color: "#000", marginTop: 10 }}>
          Name: Harsh Patel
        </Text>
        <Text style={{ fontSize: 16, color: "#000", marginTop: 10 }}>
          Email: harshpatel4086@gmail.com
        </Text>
      </View>

      {/* App Information */}
      <View style={styles.card}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000" }}>
          What is this app?
        </Text>
        <Text style={{ fontSize: 16, color: "#000", marginTop: 10 }}>
          This is a simple app to show my skills and how I can build a
          application using React Native and Expo.
        </Text>
      </View>

      {/* How this app is work */}
      <View style={styles.card}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000" }}>
          How this app is work?
        </Text>
        <Text style={{ fontSize: 16, color: "#000", marginTop: 10 }}>
          This app is a simple weather app to show the weather information of
          you search the weather information of any location. This app is built
          using React Native and Expo. It uses the OpenWeatherMap API to get the
          weather information.
        </Text>
      </View>

      {/* Download this project */}
      <View style={styles.card}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000" }}>
          Download this project
        </Text>
        <Text style={{ fontSize: 16, color: "#000", marginTop: 10 }}>
          You can download this project from my GitHub link:
        </Text>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://www.github.com")}
        >
          <Text style={styles.link}>Download Source Code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
    marginTop: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
    marginTop: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  link: {
    fontSize: 16,
    color: "blue",
    marginTop: 10,
    textDecorationLine: "underline",
  },
});
