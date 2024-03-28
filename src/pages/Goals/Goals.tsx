import React, { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import { collection, query, orderBy, onSnapshot, QuerySnapshot, doc, where } from "firebase/firestore";
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

  createdAt?: string; // Add this line
}

const Goals: React.FC = () => {
  const userId = localStorage.getItem('authToken');
  const [goals, setGoals] = useState<Goal[]>([]);

  useEffect(() => {
    if (!userId) {
      console.log("UserId not found");
      return; // Exit early if userId is not available
    }

    const unsubscribe = getGoals(userId); // Pass userId to getGoals
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [userId]);

  const getGoals = (userId: string) => {
    try {
      const userDocRef = doc(db, "users", userId);
      const userGoalsCollectionRef = collection(userDocRef, "goals");
      const queryGoals = query(
        userGoalsCollectionRef,
        where("userI", "==", userId),
        orderBy("createdAt")
      );
      console.log("Query Goals:", queryGoals); // Add this line
  
      return onSnapshot(queryGoals, (snapshot: QuerySnapshot) => {
        const docs: Goal[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;
          console.log("Document Data:", data); // Add this line
          docs.push({
            ...data, id,
         
          });
        });
        console.log("Retrieved Goals:", docs); // Add this line
        setGoals(docs);
      });
    } catch (error) {
      console.log("Error:", error);
    }
  };
  

  return (
    <div>

      {goals.map((goal) => (
        <div key={goal.id}>
          <p>Monthly Goal One: {goal.goalDescription}</p>
          <p>Monthly Goal Two: {goal.goalDescription}</p>
   
        </div>
      ))}
    </div>
  );
};

export default Goals;
