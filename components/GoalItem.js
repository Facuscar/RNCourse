import { View, Text, Pressable, StyleSheet } from "react-native";

const GoalItem = ({ text, handleDelete, id }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={() => handleDelete(id)}
        android_ripple={{ color: '#210644' }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  }
})

export default GoalItem;