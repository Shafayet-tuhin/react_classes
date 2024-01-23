export const taskReducer = (tasks = [] , action) => {
    switch (action.type) { 

     case 'CreateTask' : {
         const newTask = {
            id : Date.now(),
            title : action.payload.id ,
            listId : action.payload.listId,
            boardId : action.payload.boardId
         }
         return [...tasks, newTask] ;
     }

     case 'UpdateTask' : {
         return tasks.map(item =>  {
            if ( item.id === action.payload.id) {
                return {...item , title : action.payload.title}
            }
            return item;
         })   
     }

     case 'DeleteTask' : {
         return tasks.filter(item => item.id!== action.payload)
     }

     case 'Change_List_Id' : {
        return tasks.map(item =>  {
            if ( item.id === action.payload.id) {
                return {...item , listId : action.payload.listId}
            }
            return item;
         })  
     }

     case 'Change_Board_Id' : {
        return tasks.map(item =>  {
            if ( item.id === action.payload.id) {
                return {...item , boardId : action.payload.boardId}
            }
            return item;
         })  
     }

     default: {
         return tasks;
    }

    }
}