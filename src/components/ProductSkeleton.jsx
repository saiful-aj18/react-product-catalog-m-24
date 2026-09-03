function ProductSkeleton() {
  return (
    <div className="animate-pulse overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
      <div className="h-60 bg-slate-800"></div>

      <div className="space-y-4 p-5">
        <div className="h-4 w-24 rounded bg-slate-800"></div>

        <div className="h-5 w-full rounded bg-slate-800"></div>

        <div className="h-5 w-2/3 rounded bg-slate-800"></div>

        <div className="h-6 w-20 rounded bg-slate-800"></div>
      </div>
    </div>
  );
}

export default ProductSkeleton;