import { useLibrary } from "./LibraryContext";

export const AddBookForm = () => {
  const {
    actions: { addBook },
  } = useLibrary();

  const submitForm = (event) => {
    event.preventDefault();
    addBook({
      title: event.target.elements.title.value,
      author: event.target.elements.author.value,
      category: event.target.elements.category.value,
    });
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="author">author:</label>
      <input type="text" name="author" />
      <label htmlFor="title">title:</label>
      <input type="text" name="title" />
      <label htmlFor="category">category:</label>
      <input type="text" name="category" />
      <button type="submit">+📖 Add Book</button>
    </form>
  );
};