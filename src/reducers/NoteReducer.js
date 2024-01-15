export const noteReducer = (currentState, action) => {
    switch (action.type) {
      case 'Change_Title': {
        return {
          ...currentState,
          noteTitle: action.payload,
        };
      }
  
      case 'Create_Note': {
        const newNote = {
          id: Date.now(),
          title: currentState.noteTitle,
        };
        return {
          ...currentState,
          notes: [...currentState.notes, newNote],
          noteTitle: "",
        };
      }
      
      case 'Edit_Note': {
        const tobeUpdated = currentState.notes.find(el => el.id === action.payload);
  
        return {
          ...currentState,
          editMode: true,
          editableNote: tobeUpdated,
          noteTitle: tobeUpdated.title, // Fixed the typo here
        };
      }
  
      case 'Update_Note': {
        return {
          ...currentState,
          notes: currentState.notes.map(item => {
            if (item.id === currentState.editableNote.id) {
              item.title = currentState.noteTitle;
            }
            return item;
          }),
          editMode: false,
          editableNote: null,
          noteTitle: "",
        };
      }
      
      case 'Remove_Note': {
        return {
          ...currentState,
          notes: currentState.notes.filter(item => item.id !== action.payload),
        };
      }
  
      default:
        return currentState;
    }
  };