import React from "react";
import { useLibrary } from "./LibraryContext";

export const Book = ({ book }) => {
  const { borrowBook, returnBook, removeBook } = useLibrary();

  return (
    <>
      <h4>📖 {book.title}</h4>
      <p>✍ {book.author}</p>
      {book.available ? (
        <button type="button" onClick={() => borrowBook(book.id)}>
          ⇩ Borrow
        </button>
      ) : (
        <button type="button" onClick={() => returnBook(book.id)}>
          ⏎ Return
        </button>
      )}
      <button type="button" onClick={() => removeBook(book.id)}>
        🗑️ Remove
      </button>
    </>
  );
};
