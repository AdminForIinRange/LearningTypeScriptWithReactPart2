import React, { useState, useEffect, ReactNode } from "react";
import { db } from "../../config/firebase";
import { collection, query, where, orderBy, onSnapshot, QuerySnapshot, doc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

interface Goal {
  MonthlyGoalOne: ReactNode;
  MonthlyGoalTwo: ReactNode;
  MonthlyGoalThree: ReactNode;
  WeeklyGoalOne: ReactNode;
  WeeklyGoalTwo: ReactNode;
  WeeklyGoalThree: ReactNode;
  DailyGoalOne: ReactNode;
  DailyGoalTwo: ReactNode;
  DailyGoalThree: ReactNode;
  goalDescription: ReactNode;
  timeEstimate: ReactNode;
  id: string;
  // Define your goal properties here
}

const Goals: React.FC = () => {


  const userID = localStorage.getItem('authToken');
  const goalCollectionRef = collection(db, "goals");
  const [goals, setGoals] = useState<Goal[]>([]);
  const [unsubscribe, setUnsubscribe] = useState<(() => void) | null>(null);

  useEffect(() => {
    const unsubscribeFunc = getGoals();
    setUnsubscribe(unsubscribeFunc);
    return () => {
      if (unsubscribeFunc) unsubscribeFunc();
    };
  }, [userID]); // Run effect whenever userID changes

  const getGoals = () => {
    try {
      if (!userID) {
        console.log("UserID not found");
        return;
      }
  
      const userDocRef = doc(db, "users", userID);
      const userGoalsCollectionRef = collection(userDocRef, "goals");
  
      const querygoal = query(
        userGoalsCollectionRef,
        orderBy("createdAt")
      );
  
      const unsubscribeFunc = onSnapshot(querygoal, (snapshot: QuerySnapshot) => {
        console.log("Snapshot received:", snapshot);
        const docs: Goal[] = [];
  
        snapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;
          const goal: Goal = {
            id: id,
            MonthlyGoalOne: data.MonthlyGoalOne || "",
            MonthlyGoalTwo: data.MonthlyGoalTwo || "",
            MonthlyGoalThree: data.MonthlyGoalThree || "",
            WeeklyGoalOne: data.WeeklyGoalOne || "",
            WeeklyGoalTwo: data.WeeklyGoalTwo || "",
            WeeklyGoalThree: data.WeeklyGoalThree || "",
            DailyGoalOne: data.DailyGoalOne || "",
            DailyGoalTwo: data.DailyGoalTwo || "",
            DailyGoalThree: data.DailyGoalThree || "",
            goalDescription: data.goalDescription || "",
            timeEstimate: data.timeEstimate || "",
          };
          docs.push(goal);
        });
      
        setGoals(docs);
      });
  
      return unsubscribeFunc;
    } catch (error) {
      console.log("Error:", error);
      return null;
    }
  };
  

  return (
    <div>d
      
      {goals.map((goal) => (
        <div key={goal.id}>
          <p>Monthly Goal One: {goal.MonthlyGoalOne}</p>
          <p>Monthly Goal Two: {goal.MonthlyGoalTwo}</p>
          <p>Monthly Goal Three: {goal.MonthlyGoalThree}</p>
          <p>Weekly Goal One: {goal.WeeklyGoalOne}</p>
          <p>Weekly Goal Two: {goal.WeeklyGoalTwo}</p>
          <p>Weekly Goal Three: {goal.WeeklyGoalThree}</p>
          <p>Daily Goal One: {goal.DailyGoalOne}</p>
          <p>Daily Goal Two: {goal.DailyGoalTwo}</p>
          <p>Daily Goal Three: {goal.DailyGoalThree}</p>
          <p>Goal Description: {goal.goalDescription}</p>
          <p>Time Estimate: {goal.timeEstimate}</p>
          {/* Add other properties as needed */}
        </div>
      ))}
    </div>
  );
  
};

export default Goals;
