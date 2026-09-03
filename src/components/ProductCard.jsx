import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group overflow-hidden rounded-xl border border-slate-900 bg-slate-900/30 transition duration-300 hover:-translate-y-1 hover:border-teal-500"
    >
      <div className="h-60 overflow-hidden bg-slate-950">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <p className="mb-2 text-sm capitalize text-teal-400">
          {product.brand || product.category}
        </p>

        <h2 className="mb-3 line-clamp-2 min-h-14 text-lg font-semibold text-slate-100">
          {product.title}
        </h2>

        <p className="text-xl font-bold text-slate-200">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}

export default ProductCard;