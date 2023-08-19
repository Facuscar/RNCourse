import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goalText, setGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const addGoalHandler = () => {
    setCourseGoals((prev) => [...prev, { text: goalText, key: Math.random().toString() }]);
    setGoalText('');
    closeModal();
  }

  const handleGoalTextChange = (goal) => {
    setGoalText(goal);
  }

  const handleDeleteGoal = (id) => {
    setCourseGoals((prev) => {
      return (
        prev.filter((goal) => goal.key !== id)
      );
    });
  };

  return (
    <View style={styles.appContainer}>
      <Button title='Open modal' color="#5e0acc" onPress={openModal} />
      <GoalInput
        addGoalHandler={addGoalHandler}
        handleGoalTextChange={handleGoalTextChange}
        goalText={goalText}
        isOpen={isModalOpen}
        closeModal={closeModal}
      />
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={item => {
          return (
            <GoalItem text={item.item.text} handleDelete={handleDeleteGoal} id={item.item.key} />
        )
        }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1
  },
  goalsContainer: {
    flex: 5,
  },
});
