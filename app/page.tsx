import MapView from "./components/MapView";

export default function Home() {
  return (
    <main className="flex h-screen flex-col">
      <header className="h-16 shrink-0 bg-slate-800 p-4 text-white">
        Real Estate Map
      </header>

      <div className="flex min-h-0 flex-1">
        <aside className="w-64 shrink-0 bg-slate-200 p-4">
          Sidebar
        </aside>

        <section className="min-w-0 flex-1">
          <MapView />
        </section>
      </div>
    </main>
  );
}