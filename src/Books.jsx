import { Category } from "./Category";
import { useLibrary } from "./LibraryContext";

export const Books = () => {
  const { books } = useLibrary();
  const categories = books.reduce(
    (categories, book) =>
      categories.includes(book.category)
        ? categories
        : categories.concat(book.category),
    []
  );
  return (
    <>
      <h2>Books ({books.length}):</h2>
      {categories.map((category) => (
        <Category
          key={category}
          title={category[0].toUpperCase() + category.slice(1)}
          category={category}
        />
      ))}
    </>
  );
};
