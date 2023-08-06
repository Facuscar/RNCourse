import { View, Text, Pressable, StyleSheet } from "react-native";

const GoalItem = ({ text, handleDelete }) => {
  return (
    <Pressable onPress={handleDelete}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  }
})

export default GoalItem;