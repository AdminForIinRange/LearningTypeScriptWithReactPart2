 
 
 
 
 
 
 
 export interface  modalValueState  {
    modalValue: "Goal" | "Monthly" | "weekly" | "Daily";

  }
  
 
 export interface  CreateYourGoalModalProps  {
   modalValue: modalValueState
   blockScrollOnMount: boolean;
   isOpen: boolean;
   onClose: () => void;
 }
 