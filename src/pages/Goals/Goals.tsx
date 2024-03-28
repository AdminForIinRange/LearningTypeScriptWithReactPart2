import React, { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import { collection, query, orderBy, onSnapshot, QuerySnapshot, doc, where, getDocs } from "firebase/firestore";
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
  
  return (
    <div>
        {goals.map(({  ...goal }) => (
        <div key={goal.id}>
          <p>  {goal.MonthlyGoalOne}</p>
          <p> {goal.MonthlyGoalTwo}</p>
          <p> {goal.MonthlyGoalThree}</p>
          <p> {goal.WeeklyGoalOne}</p>
          <p> {goal.WeeklyGoalTwo}</p>
          <p> {goal.WeeklyGoalThree}</p>
          <p> {goal.DailyGoalOne}</p>
          <p> {goal.DailyGoalTwo}</p>
          <p> {goal.DailyGoalThree}</p>
          <p> {goal.goalDescription}</p>
          <p> {goal.timeEstimate}</p>
          {/* Add other properties as needed */}
        </div>
      ))}

    </div>
  );
};

export default Goals;
