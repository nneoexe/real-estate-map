import MapView from "../components/MapView";
import TaxAssessors from "@/components/TaxAssessors";

export default function Home() {
  return (
    <main className="flex h-screen flex-col">
      <header className="h-16 shrink-0 bg-slate-800 p-4 text-white">
        Real Estate Map
      </header>

      <div className="flex min-h-0 flex-1">
        <aside className="w-64 shrink-0 overflow-y-auto bg-slate-200 p-4">
          <h2 className="mb-4 font-semibold">Properties</h2>
          <TaxAssessors />
        </aside>        
        <section className="min-w-0 flex-1">
          <MapView />
        </section>
      </div>
    </main>
  );
}