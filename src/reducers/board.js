export const boardReducer = (boards = [], action) => {
        switch (action.type) {

            case 'CreateBoard': {
                const newBoard = {
                    id: Date.now(),
                    title: action.payload,
                    lists: [],
                    tasks: [],
                }
                return [...boards, newBoard]
            }

            case 'UpdateBoard': {
                return boards.map(item => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            title: action.payload.title
                        }
                    }
                    return item;
                })

            }

            case 'DeleteBoard': {
                return boards.filter(item => item.id !== action.payload)
            }

            case 'Add_List_ID_ToBoard': {
                return boards.map(item => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            lists: [...item.lists, action.payload.listId]
                        }
                    }
                    return item;
                })
            }

            case 'Remove_List_ID_FromBoard': {
                return boards.map(item => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            lists: item.lists.filter(listId =>
                                listId !== action.payload.listId)
                        }
                    }
                    return item;
                })
            }

            case 'Add_Task_ID_ToBoard': {
                return boards.map(item => {
                        if (item.id === action.payload) {
                            return {
                                ...item,
                                tasks: [...item.tasks, action.payload.taskId]
                            }
                            return item
                        }  
                    })
                }

                case 'Remove_Task_ID_FromBoard': {
                    return boards.map(item => {
                        if (item.id === action.payload) {
                            return {
                                ...item,
                                tasks: item.tasks.filter(taskId =>
                                    taskId !== action.payload.taskId)
                            }
                        }
                        return item;
                    })
                }

                default: {
                    return boards;
                }
            }
        }