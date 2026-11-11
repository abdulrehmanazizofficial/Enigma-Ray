export default function NotFound() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#050505] text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="mt-2 text-white/60">Page not found</p>
        <a href="/studio" className="mt-4 inline-block rounded-lg bg-cyan-500 px-4 py-2 text-black font-semibold">
          Return to Studio
        </a>
      </div>
    </div>
  );
}
