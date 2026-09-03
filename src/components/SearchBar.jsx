function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-300">
        Search Products
      </label>

      <input
        type="text"
        placeholder="Search by product name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-slate-200 outline-none placeholder:text-slate-500 focus:border-teal-500"
      />
    </div>
  );
}

export default SearchBar;