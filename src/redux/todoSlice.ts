import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

interface TodoItem {
  id: string;
  name: string;
  created: string;
  category: string;
  content: string;
  date: string[];
  archive: boolean;
}

interface TodoState {
  items: TodoItem[];
  isLoading: boolean;
  error: boolean;
}

const initialState: TodoState = {
  items: [
    {
      id: "1",
      name: "Shopping List",
      created: "27.07.2023, 03:34:51",
      category: "Task",
      content: "tomatos",
      date: [],
      archive: true,
    },
    {
      id: "2",
      name: "The teory evolute",
      created: "27.07.2023, 03:35:51",
      category: "Task",
      content: "drink",
      date: [],
      archive: false,
    },
    {
      id: "3",
      name: "New Test",
      created: "27.07.2023, 03:33:51",
      category: "Idea",
      content: "tomatosasdlm",
      date: [],
      archive: false,
    },
    {
      id: "L72_R_aFUBIfIzrq6CgO5",
      name: "test task1",
      created: "27.07.2023, 03:32:52",
      category: "Random Thought",
      content: "empty",
      date: [],
      archive: false,
    },
    {
      id: "bDJKttxUZELllczsD5CJt",
      name: "Radency test 1",
      created: "27.07.2023, 03:34:26",
      category: "Idea",
      content: "Radency test 1",
      date: ["29/07/2023"],
      archive: false,
    },
    {
      id: "GAqq2zh3DFScs3xxxH-JY",
      name: "Finished ths task",
      created: "27.07.2023, 03:34:23",
      category: "Random Thought",
      content: "test",
      date: ["01/07/2023", "02/07/2023"],
      archive: false,
    },
    {
      id: "GAqq2zh3DFSc232322-JY",
      name: "Last Todo for this task",
      created: "27.07.2023, 03:34:23",
      category: "Random Thought",
      content: "test",
      date: ["02/07/2023", "06/07/2023"],
      archive: false,
    },
  ],
  isLoading: false,
  error: false,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (
      state,
      action: PayloadAction<Omit<TodoItem, "id" | "created">>
    ) => {
      const newItem: TodoItem = {
        id: nanoid(),
        created: new Date().toLocaleString(),
        ...action.payload,
      };
      state.items.push(newItem);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
    updateTodo: (
      state,
      action: PayloadAction<Partial<TodoItem> & { id: string }>
    ) => {
      const { category, content, date, id, name } = action.payload;
      const indexToUpdate = state.items.findIndex((item) => item.id === id);
      if (indexToUpdate !== -1) {
        state.items[indexToUpdate] = {
          ...state.items[indexToUpdate],
          category: category || state.items[indexToUpdate].category,
          content: content || state.items[indexToUpdate].content,
          date: date || state.items[indexToUpdate].date,
          name: name || state.items[indexToUpdate].name,
        };
      }
    },
    toggleArchive: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.items[index].archive = !state.items[index].archive;
      }
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, toggleArchive } =
  todoSlice.actions;
export const todoReducer = todoSlice.reducer;
