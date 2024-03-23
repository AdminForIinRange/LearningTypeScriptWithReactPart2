 
 
 
 
 
 
 
 export interface  modalValueState  {
    modalValue: "Goal" | "Monthly" | "weekly" | "Daily";

  }
  
 
 export interface  GoalModalHandlerProps  {
   modalValue: modalValueState
   blockScrollOnMount: boolean;
   isOpen: boolean;
   setModalValue: (value: modalValueState) => void;
   onClose: () => void;
 }
 