function CategoryFilter({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-300">
        Category
      </label>

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="w-full rounded-lg border border-slate-900 bg-slate-900/60 px-4 py-3 text-slate-200 outline-none focus:border-teal-500"
      >
        <option value="all">All Categories</option>

        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;