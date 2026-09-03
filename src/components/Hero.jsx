function Hero() {
  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20 text-center md:py-28">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-teal-400">
          Discover Your Style
        </p>

        <h1 className="mb-6 text-4xl font-bold text-slate-100 md:text-6xl">
          Find Products You'll Love
        </h1>

        <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-400">
          Explore our collection and discover amazing products
          based on your needs, category and budget.
        </p>

        <a
          href="#products"
          className="mt-8 inline-block rounded-lg bg-teal-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-teal-400"
        >
          Explore Products
        </a>
      </div>
    </section>
  );
}

export default Hero;