import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goalText, setGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const addGoalHandler = () => {
    setCourseGoals((prev) => [...prev, { text: goalText, key: Math.random().toString() }]);
    setGoalText('');
  }
  const handleGoalTextChange = (goal) => {
    setGoalText(goal);
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput addGoalHandler={addGoalHandler} handleGoalTextChange={handleGoalTextChange} />
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={item => {
          return (
            <GoalItem text={item.item.text} />
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
