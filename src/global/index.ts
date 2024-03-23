 
 
 
 
 
 
 
 export interface  modalValue  {
    modalValue: "Goal" | "Monthly" | "Weekly" | "Daily";
    setModalVale: (modalValue: "Goal" | "Monthly" | "Weekly" | "Daily") => void;

  }
  



  export interface  onClose  {
  
    onClose: () => void;
  }
  


 
 export interface  GoalModalHandlerProps  {
    modalValue: string | undefined;
   blockScrollOnMount: boolean;
   isOpen: boolean;
  
   onClose: () => void;
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