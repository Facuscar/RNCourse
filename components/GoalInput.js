import { TextInput, View, Button, StyleSheet, Modal, Image } from "react-native"

const GoalInput = ({ handleGoalTextChange, addGoalHandler, goalText, isOpen, closeModal }) => {
  return (
    <Modal visible={isOpen} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/goal.png')} />
        <TextInput 
          style={styles.textInput}
          placeholder='Your goals!'
          onChangeText={handleGoalTextChange}
          value={goalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Add goal' onPress={addGoalHandler} color="#b180f0"/>
          </View>
          <View style={styles.button}>
            <Button title='Cancel' onPress={closeModal} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '100%',
    padding: 16,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  }
})