import { createContext, useContext, useReducer } from "react";
import { collection } from "./collection";

export const LibraryContext = createContext({});

LibraryContext.displayName = "LibraryContext";

const libraryReducer = (state, action) => {
  switch (action.type) {
    case "borrow-book":
      return state.map((book) =>
        book.id === action.id ? { ...book, available: false } : book
      );
    case "return-book":
      return state.map((book) =>
        book.id === action.id ? { ...book, available: true } : book
      );
    case "add-book":
      return [...state, action.book];
    case "remove-book":
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export const LibraryContextProvider = ({ children }) => {
  const [books, dispatch] = useReducer(libraryReducer, collection.books);

  const borrowBook = (id) => {
    dispatch({ type: "borrow-book", id });
  };

  const returnBook = (id) => {
    dispatch({ type: "return-book", id });
  };

  const addBook = (book) => {
    dispatch({ type: "add-book", book });
  };

  const removeBook = (id) => {
    dispatch({ type: "remove-book", id });
  };

  return (
    <LibraryContext.Provider
      value={{ books, borrowBook, returnBook, addBook, removeBook }}
    >
      {children}
    </LibraryContext.Provider>
  );
};

export const useLibrary = () => {
  const context = useContext(LibraryContext);
  if (!context) {
    throw new Error("useLibrary must be used within a LibraryContextProvider");
  }
  return context;
};
