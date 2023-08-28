import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import React, { useState } from "react";

export default function CourseInput({ visible,onAddCourse,onCancel }) {
  const [enteredCourseText, setEnteredCourseText] = useState("");
  const addCourseHandler = () => {
    onAddCourse(enteredCourseText)
    setEnteredCourseText('')
  };
  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/logoheader.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Yeni Kurs Ekle!"
          value={enteredCourseText}
          onChangeText={(text) => setEnteredCourseText(text)}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Pressable style={styles.cancelButton} onPress={onCancel}>
              <Text style={{ color: "white", alignSelf: "center" }}>
                İptal Et
              </Text>
            </Pressable>
          </View>
          <View style={styles.button}>
            <Pressable style={styles.addButton} onPress={addCourseHandler}>
              <Text style={{ color: "white", alignSelf: "center" }}>Ekle</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  image: {
    width: 100,
    height: 100,
  },
  textInput: {
    borderWidth: 1,
    width: "75%",
    padding: 10,
    borderRadius: 10,
    borderColor: "blue",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  button: {
    width: "25%",
    marginHorizontal: 10,
  },
  addButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
  },
  cancelButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
});
