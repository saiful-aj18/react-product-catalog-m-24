function PriceFilter({
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-300">
        Price Range
      </label>

      <div className="flex gap-3">
        <input
          type="number"
          min="0"
          placeholder="Min"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-slate-200 outline-none placeholder:text-slate-500 focus:border-teal-500"
        />

        <input
          type="number"
          min="0"
          placeholder="Max"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-slate-200 outline-none placeholder:text-slate-500 focus:border-teal-500"
        />
      </div>
    </div>
  );
}

export default PriceFilter;