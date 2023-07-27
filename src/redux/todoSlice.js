import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [
      {
        id: 1,
        name: "Shopping List",
        created: "27.07.2023, 03:34:51",
        category: "Task",
        content: "tomatos",
        date: [],
        archive: true,
        edit: "false",
        deleteTodo: "false",
      },
      {
        id: 2,
        name: "The teory evolute",
        created: "27.07.2023, 03:35:51",
        category: "Task",
        content: "drink",
        date: [],
        archive: false,
        edit: "false",
        deleteTodo: "false",
      },
      {
        id: 3,
        name: "New Test",
        created: "27.07.2023, 03:33:51",
        category: "Idea",
        content: "tomatosasdlm",
        date: [],
        archive: false,
        edit: "false",
        deleteTodo: "false",
      },
      {
        id: "L72_R_aFUBIfIzrq6CgO5",
        name: "test task1",
        created: "27.07.2023, 03:32:52",
        category: "Random Thought",
        content: "empty",
        date: [],
        archive: false,
        edit: false,
      },
      {
        id: "bDJKttxUZELllczsD5CJt",
        name: "Radency test 1",
        created: "27.07.2023, 03:34:26",
        category: "Idea",
        content: "Radency test 1",
        date: ["29/07/2023"],
        archive: false,
        edit: false,
      },
      {
        id: "GAqq2zh3DFScs3xxxH-JY",
        name: "Finished ths task",
        created: "27.07.2023, 03:34:23",
        category: "Random Thought",
        content: "test",
        date: ["01/07/2023", "02/07/2023"],
        archive: false,
        edit: false,
      },
      {
        id: "GAqq2zh3DFSc232322-JY",
        name: "Last Todo for this task",
        created: "27.07.2023, 03:34:23",
        category: "Random Thought",
        content: "test",
        date: ["02/07/2023", "06/07/2023"],
        archive: false,
        edit: false,
      },
    ],
    isLoading: false,
    error: false,
  },
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            created: new Date().toLocaleString(),
            ...text,
          },
        };
      },
    },
    deleteTodo(state, action) {
      const index = state.items.findIndex((item) => item.id === action.payload);
      state.items.splice(index, 1);
    },
    updateTodo: {
      reducer(state, action) {
        const { categoryEdit, contentEdit, dateEdit, id, nameEdit } =
          action.payload;

        const indexToUpdate = state.items.findIndex((item) => item.id === id);
        if (indexToUpdate !== -1) {
          state.items[indexToUpdate] = {
            ...state.items[indexToUpdate],
            category: categoryEdit,
            content: contentEdit,
            date: dateEdit,
            name: nameEdit,
          };
        }
      },
      prepare(text) {
        return {
          payload: {
            created: new Date().toLocaleString(),
            ...text,
          },
        };
      },
    },
    toggleArchive: {
      reducer(state, action) {
        const index = state.items.findIndex(
          (item) => item.id === action.payload
        );
        if (index !== -1) {
          state.items[index] = {
            ...state.items[index],
            archive: !state.items[index].archive,
          };
        }
      },
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, toggleArchive } =
  todoSlice.actions;

export const todoReducer = todoSlice.reducer;
