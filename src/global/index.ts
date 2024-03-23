 
 
 
 
 
 
 
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
 

