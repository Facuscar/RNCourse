import { TextInput, View, Button, StyleSheet, Modal } from "react-native"

const GoalInput = ({ handleGoalTextChange, addGoalHandler, goalText, isOpen }) => {
  return (
    <Modal visible={isOpen} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput}
          placeholder='Your goals!'
          onChangeText={handleGoalTextChange}
          value={goalText}
        />
        <Button title='Add goal' onPress={addGoalHandler} />
      </View>
    </Modal>
  )
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
})