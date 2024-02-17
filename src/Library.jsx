import { Books } from "./Books";
import { LibraryContextProvider } from "./LibraryContext";

function Library() {
  return (
    <div className="App">
      <h1>Library</h1>
      <LibraryContextProvider>
        <Books />
      </LibraryContextProvider>
    </div>
  );
}

export default Library;
