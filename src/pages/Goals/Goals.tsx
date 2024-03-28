import React, { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import { collection, query, orderBy, onSnapshot, QuerySnapshot, doc, where, updateDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { HStack , Tabs, TabList, TabPanels, Tab, TabPanel, VStack, Text, Button} from "@chakra-ui/react";

interface Goal {
  MonthlyGoalOne?: string;
  MonthlyGoalTwo?: string;
  MonthlyGoalThree?: string;
  WeeklyGoalOne?: string;
  WeeklyGoalTwo?: string;
  WeeklyGoalThree?: string;
  DailyGoalOne?: string;
  DailyGoalTwo?: string;
  DailyGoalThree?: string;
  goalDescription?: string;
  timeEstimate?: string;
  id: string;
  isChecked?: boolean; // Added isChecked field
  createdAt?: string;
}

const Goals: React.FC = () => {
  const userId = localStorage.getItem('authToken');
  const [goals, setGoals] = useState<Goal[]>([]);

  useEffect(() => {
    if (!userId) {
      console.log("UserId not found");
      return;
    }

    const unsubscribe = getGoals(userId);
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [userId]);

  const getGoals = (userId: string | null) => {
    try {
      if (!userId) return;

      const userDocRef = collection(db, 'goals');
      const q = query(userDocRef, where('userId', '==', userId));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const updatedGoals: Goal[] = [];
        querySnapshot.forEach((doc) => {
          updatedGoals.push({ id: doc.id, ...doc.data() } as Goal);
        });
        setGoals(updatedGoals);
        console.log("Goals updated:", updatedGoals);
      });
      return unsubscribe;
    } catch (error) {
      console.error("Error fetching goals:", error);
    }
  };

  const handleCheckboxChange = async (goalId: string, isChecked: boolean) => {
    try {
      const goalDocRef = doc(db, 'goals', goalId);
      await updateDoc(goalDocRef, { isChecked });
      console.log("Goal checked:", goalId);
    } catch (error) {
      console.error("Error updating goal checkbox:", error);
    }
  };

  return (
    <div>

      <VStack>

<Text fontSize={"40px"}>
{goals.map((goal) => (
        <Text key={goal.id}>
          {goal.goalDescription}
        </Text>
      ))}
</Text>


      <Tabs variant='enclosed'>
  <TabList>
    <Tab>Daily Tasks</Tab>
    <Tab>Weekly Tasks</Tab>
    <Tab>Monthly Tasks</Tab>

  </TabList>
  <TabPanels>
    <TabPanel>
x

    </TabPanel>
    <TabPanel>
      <p>2!</p>
    </TabPanel>
    <TabPanel>
      <p>3!</p>
    </TabPanel>
 
  </TabPanels>
</Tabs>
      </VStack>

      <HStack>
        
      </HStack>








      {goals.map(({ MonthlyGoalOne, MonthlyGoalTwo, MonthlyGoalThree, WeeklyGoalOne, WeeklyGoalTwo, WeeklyGoalThree, DailyGoalOne, DailyGoalTwo, DailyGoalThree, goalDescription, timeEstimate, id, isChecked })  => (
        <div key={id}>
          <p style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>{MonthlyGoalOne}</p>
          <p style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>{MonthlyGoalTwo}</p>
          <p style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>{MonthlyGoalThree}</p>

          <p style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>{WeeklyGoalOne}</p>
          <p style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>{WeeklyGoalTwo}</p>
          <p style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>{WeeklyGoalThree}</p>

          <p style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>{DailyGoalOne}</p>
          <p style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>{DailyGoalTwo}</p>
          <p style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>{DailyGoalThree}</p>
          
          <p style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>{goalDescription}</p>
          <p style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>{timeEstimate}</p>
          {/* Add checkbox and handle its change */}
          <input 
            type="checkbox" 
            checked={isChecked} 
            onChange={(e) => handleCheckboxChange(id, e.target.checked)} 
          />
        </div>
      ))}
    </div>
  );
};

export default Goals;
