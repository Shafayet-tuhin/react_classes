export const listReducer = (lists = [], action) => {
    switch (action.type) {

        case 'CreateList': {

            const newList = {
                id: action.payload.id,
                title: action.payload,
                boardId: action.payload.boardId,
                tasks: []
            }
            return [...lists, newList]
        }

        case 'UpdateList': {
            return lists.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        title: action.payload.title
                    }
                }
                return item;
            })
        }

        case 'DeleteList': {
            return lists.filter(item => item.id !== action.payload)
        }

        case 'Change_Board_Id': {
            return lists.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        boardId: action.payload.boardId
                    }
                }
                return item;
            })
        }

        case 'Add_Task_Id': {
            return lists.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        tasks: action.payload.tasks
                    }
                }
                return item;
            })
        }

        case 'Remove_Task_Id': {
            return lists.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        tasks: item.tasks.filter(taskId => taskId !== action.payload.taskId)
                    }
                }
                return item;
            })
        }

        default: {
            return lists;
        }
    }
}