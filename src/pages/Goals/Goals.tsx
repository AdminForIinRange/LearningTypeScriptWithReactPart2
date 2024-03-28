import React, { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import { collection, query, orderBy, onSnapshot, QuerySnapshot, doc, where, updateDoc, Timestamp } from "firebase/firestore";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

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
  isChecked?: boolean;
  lastUpdated?: Date; // Update to Date type
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
          const goalData = { id: doc.id, ...doc.data() } as Goal;
          // Check if the goal needs to be reset
          if (shouldResetGoal(goalData)) {
            // Reset the isChecked field and update the lastUpdated field
            goalData.isChecked = false;
            goalData.lastUpdated = new Date();
            updateDoc(doc.ref, { isChecked: false, lastUpdated: new Date() });
          }
          updatedGoals.push(goalData);
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
      await updateDoc(goalDocRef, { isChecked, lastUpdated: new Date()  });
      console.log("Goal checked:", goalId);
    } catch (error) {
      console.error("Error updating goal checkbox:", error);
    }
  };

  // Check if the goal needs to be reset based on its type and last updated date
  const shouldResetGoal = (goal: Goal): boolean => {
    const currentDate = new Date();

    
    const lastUpdatedDate = goal.lastUpdated ? Timestamp.fromDate(goal.lastUpdated).toDate() : null;
    
    if (!lastUpdatedDate) return false; // If lastUpdated is not set, don't reset

    if (goal.MonthlyGoalOne || goal.MonthlyGoalTwo || goal.MonthlyGoalThree) {
      // Check if monthly goal needs reset (set to first day of the month)
      return currentDate.getMonth() !== lastUpdatedDate.getMonth();
    } else if (goal.WeeklyGoalOne || goal.WeeklyGoalTwo || goal.WeeklyGoalThree) {
      // Check if weekly goal needs reset (set to first day of the week)
      return currentDate.getDay() !== lastUpdatedDate.getDay();
    } else if (goal.DailyGoalOne || goal.DailyGoalTwo || goal.DailyGoalThree) {
      // Check if daily goal needs reset (set to previous day)
      const yesterday = new Date(currentDate);
      yesterday.setDate(currentDate.getDate() - 1);
      return yesterday.getDate() !== lastUpdatedDate.getDate();
    }
    return false;
  };

  return (
    <div>
      {goals.map(({ MonthlyGoalOne, MonthlyGoalTwo, MonthlyGoalThree, WeeklyGoalOne, WeeklyGoalTwo, WeeklyGoalThree, DailyGoalOne, DailyGoalTwo, DailyGoalThree, goalDescription, timeEstimate, id, isChecked, lastUpdated})  => (
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
          <p style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>{timeEstimate}{lastUpdated?.toString()} </p>
      
      
          {/* Add checkbox and handle its change */}
          <label>
            <input 
              type="checkbox" 
              checked={isChecked} 
              onChange={(e) => handleCheckboxChange(id, e.target.checked)} 
            />
            Complete?
          </label>
        </div>
      ))}
    </div>
  );
};

export default Goals;
