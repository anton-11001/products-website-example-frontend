import { ProductList } from "./components/ProductList";
import { Pagination } from "./components/Pagination";
import { SearchInput } from "./components/SearchInput";
import { useSearchQuery } from "./hooks/useSearchQuery";
import { usePagination } from "./hooks/usePagination";
import { useProducts } from "./hooks/useProducts";

import "./App.css";

function App() {
  const { currentPage, moveToInitialPage, handlePageChange } = usePagination();

  const { searchQuery, handleSearchChange } = useSearchQuery({
    moveToInitialPage,
  });

  const { products, isLoading, totalPages, error } = useProducts({
    currentPage,
    searchQuery,
  });

  if (error) {
    return (
      <div className="app">
        <div className="app-error" role="alert">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Products Catalog</h1>
        <SearchInput value={searchQuery} onChange={handleSearchChange} />
      </header>
      <main className="app-main">
        <ProductList products={products} isLoading={isLoading} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </main>
    </div>
  );
}

export default App;
