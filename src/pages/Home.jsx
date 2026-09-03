import { useEffect, useMemo, useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import ProductSkeleton from "../components/ProductSkeleton";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import PriceFilter from "../components/PriceFilter";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("all");

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://dummyjson.com/products?limit=100"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        setProducts(data.products);
      } catch (error) {
        console.error(error);
        setError("Unable to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = useMemo(() => {
    return [...new Set(products.map((product) => product.category))];
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" ||
        product.category === selectedCategory;

      const matchesMinPrice =
        minPrice === "" ||
        product.price >= Number(minPrice);

      const matchesMaxPrice =
        maxPrice === "" ||
        product.price <= Number(maxPrice);

      return (
        matchesSearch &&
        matchesCategory &&
        matchesMinPrice &&
        matchesMaxPrice
      );
    });
  }, [
    products,
    searchTerm,
    selectedCategory,
    minPrice,
    maxPrice,
  ]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setMinPrice("");
    setMaxPrice("");
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <Hero />

      <main
        id="products"
        className="mx-auto max-w-7xl px-6 py-16"
      >
        <div className="mb-10">
          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-teal-400">
                Our Collection
              </p>

              <h2 className="text-3xl font-bold text-slate-100">
                Products
              </h2>
            </div>

            {!loading && (
              <p className="text-sm text-slate-500">
                {filteredProducts.length} products found
              </p>
            )}
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />

            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />

            <PriceFilter
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
            />
          </div>

          <button
            onClick={clearFilters}
            className="mt-4 rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-teal-500 hover:text-teal-400"
          >
            Clear Filters
          </button>
        </div>

        {loading && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))}
          </div>
        )}

        {!loading && error && (
          <div className="rounded-xl border border-red-900 bg-red-950/30 p-8 text-center">
            <p className="text-red-400">{error}</p>
          </div>
        )}

        {!loading && !error && filteredProducts.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}

        {!loading &&
          !error &&
          filteredProducts.length === 0 && (
            <div className="py-20 text-center">
              <h3 className="text-2xl font-semibold text-slate-300">
                No products found
              </h3>

              <p className="mt-2 text-slate-500">
                Try changing your search or filters.
              </p>

              <button
                onClick={clearFilters}
                className="mt-6 rounded-lg bg-teal-500 px-5 py-3 font-semibold text-slate-950 hover:bg-teal-400"
              >
                Reset Filters
              </button>
            </div>
          )}
      </main>

      <footer className="border-t border-slate-800 bg-slate-950 py-8">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-slate-500">
            © 2026 ShopZone. Built with React.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;