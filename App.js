import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [name, setName] = useState("Shawn");
  const [person, setPerson] = useState({ name: "Phuong", age: 27 });
  const [age, setAge] = useState("30");
  const [people, setPeople] = useState([
    { name: "d", id: "1" },
    { name: "a", id: "2" },
    { name: "n", id: "3" },
    { name: "i", id: "4" },
    { name: "e", id: "5" },
    { name: "l", id: "6" },
    { name: ".", id: "7" },
    { name: "m", id: "8" },
  ]);

  const clickHandler = () => {
    setName("Daniel");
    setPerson({ name: "Stevie", age: 28 });
  };

  const pressHandler = (id) => {
    setPeople((prevPeople) => {
      return prevPeople.filter((person) => person.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>my name is {name}</Text>
        <Text style={styles.boldText}>
          {person.name} is {person.age}
        </Text>
      </View>
      <View style={styles.container}>
        <Text>Enter Name:</Text>
        <TextInput
          multiline
          placeholder="e.g. John Doe"
          style={styles.input}
          onChangeText={(val) => setName(val)}
        />
        <Text>Enter Age:</Text>
        <TextInput
          keyboardType="numeric"
          placeholder="e.g. 34"
          style={styles.input}
          onChangeText={(val) => setAge(val)}
        />
        <Text>
          name: {name} | age: {age}
        </Text>
        <Button title="update state" onPress={clickHandler} />
      </View>
      <View style={styles.container}>
        {/* FlatList way to scroll - better for big list/data */}
        <FlatList
          numColumns={3}
          keyExtractor={(item) => item.id}
          data={people}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => pressHandler(item.id)}>
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
        {/* ScrollView way for scroll - better for small list */}
        <ScrollView>
          {people.map((item) => (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.body}>
        <Text>Hello, World</Text>
        <Text>Hello, World</Text>
        <Text>Hello, World</Text>
      </View>
      <Text style={styles.boldText}>
        <Text>Test</Text>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  header: {
    backgroundColor: "pink",
    marginTop: 40,
    padding: 20,
  },
  boldText: {
    fontWeight: "bold",
  },
  body: {
    backgroundColor: "yellow",
    padding: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
  },
});
