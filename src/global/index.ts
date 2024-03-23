 
 
 
 
 
 
 
 export interface  modalValue  {
    modalValue: "Goal" | "Monthly" | "weekly" | "Daily";

  }
  

  export interface  onClose  {
  
    onClose: () => void;
  }
  
 
 export interface  GoalModalHandlerProps  {
   modalValue: modalValue
   blockScrollOnMount: boolean;
   isOpen: boolean;
   setModalValue: (value: modalValue) => void;
   onClose: onClose
 }
 



 export interface Goal {
    MonthlyGoalOne: string;
    MonthlyGoalTwo: string;
    MonthlyGoalThree: string;
    WeeklyGoalOne: string;
    WeeklyGoalTwo: string;
    WeeklyGoalThree: string;
    DailyGoalOne: string;
    DailyGoalTwo: string;
    DailyGoalThree: string;
    goalDescription: string;
    timeEstimate: string;
  }