import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import CourseInput from "../components/CourseInput";
import { AntDesign } from "@expo/vector-icons";

export default function HomeScreen() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courses, setCourseTitle] = useState([]);
  const startModal = () => {
    setModalIsVisible(true);
  };
  const endModal = () => {
    setModalIsVisible(false);
  };
  const addCourse = (courseTitle) => {
    setCourseTitle((currentCourses) => [
      ...currentCourses,
      {
        text: courseTitle,
        id: Math.random().toString(),
      },
    ]);
    endModal();
  };
  return (
    <View style={styles.container}>
      <Pressable style={styles.addCourseButton} onPress={startModal}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <AntDesign style={{paddingLeft:10}} name="pluscircleo" size={24} color="white" />
          <>
            <Text style={{ color: "white", alignSelf: "center", padding: 10 }}>
              Kurs Ekle
            </Text>
          </>
        </View>
      </Pressable>
      <CourseInput
        visible={modalIsVisible}
        onAddCourse={addCourse}
        onCancel={endModal}
      />
      <View>
        <FlatList
          style={styles.coursesFlat}
          data={courses}
          renderItem={({ item }) => (
            <View style={styles.coursesContainer}>
              <Text style={styles.coursesText}>{item.text}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  coursesContainer: {
    alignItems: "center",
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: 300,
    alignSelf: "center",
  },
  coursesText: {
    color: "black",
  },
  coursesFlat: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
    backgroundColor: "lightgray",
  },
  addCourseButton: {
    backgroundColor: "black",
    borderRadius: 10,
    marginBottom: 10,
    position: "absolute",
    right: 20,
    top: 7,
    width: 130,
  },
});
