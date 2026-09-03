import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://dummyjson.com/products/${id}`
        );

        if (!response.ok) {
          throw new Error("Product not found");
        }

        const data = await response.json();

        setProduct(data);
      } catch (error) {
        console.error(error);
        setError("Unable to load this product.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950">
        <Navbar />

        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <p className="text-xl text-slate-400">
            Loading product...
          </p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-slate-950">
        <Navbar />

        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h1 className="text-2xl font-bold text-slate-200">
            Product Not Found
          </h1>

          <p className="mt-3 text-slate-500">
            {error}
          </p>

          <Link
            to="/"
            className="mt-6 inline-block rounded-lg bg-teal-500 px-5 py-3 font-semibold text-slate-950"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-12">
        <Link
          to="/"
          className="mb-8 inline-block text-teal-400 transition hover:text-teal-300"
        >
          ← Back to Products
        </Link>

        <div className="grid overflow-hidden rounded-2xl border border-slate-950/50 bg-slate-900/50 md:grid-cols-2">
          <div className="flex min-h-[400px] items-center justify-center bg-slate-950/50 p-8">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="max-h-[500px] w-full object-contain"
            />
          </div>

          <div className="flex flex-col justify-center p-8 md:p-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-teal-400">
              {product.category}
            </p>

            <h1 className="mb-5 text-3xl font-bold text-slate-100 md:text-4xl">
              {product.title}
            </h1>

            <p className="mb-6 text-3xl font-bold text-slate-200">
              ${product.price}
            </p>

            <div className="mb-6 h-px bg-slate-900"></div>

            <p className="leading-8 text-slate-400">
              {product.description}
            </p>

            {product.brand && (
              <p className="mt-6 text-slate-400">
                <span className="font-semibold text-slate-200">
                  Brand:
                </span>{" "}
                {product.brand}
              </p>
            )}

            <p className="mt-3 text-slate-400">
              <span className="font-semibold text-slate-200">
                Category:
              </span>{" "}
              {product.category}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductDetails;