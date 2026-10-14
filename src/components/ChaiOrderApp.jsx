import { useState } from "react";
import { Coffee } from "lucide-react";
import ChaiCounter from "./Counter";
import AfghanGreeting from "./Greeting";

export default function ChaiOrderApp() {
  const [orderCount, setOrderCount] = useState(0);

  return (
    <main className="flex min-h-screen items-center justify-center bg-amber-50 p-5 text-stone-800">
      <section className="w-full max-w-2xl rounded-3xl border border-amber-100 bg-white p-8 text-center shadow-xl">
        <Coffee
          size={48}
          className="mx-auto mb-5 text-amber-900"
          aria-hidden="true"
        />
        <p className="text-xs font-bold tracking-[0.2em] text-amber-700">
          A TASTE OF AFGHAN HOSPITALITY
        </p>
        <h1 className="mt-3 font-serif text-4xl font-bold">Chai Time</h1>
        <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-stone-500">
          Every cup brings warmth, comfort, and happiness.
        </p>

        <div className="my-6 border-t border-amber-100" />
        <ChaiCounter onPlaceOrder={setOrderCount} />
        <AfghanGreeting orderCount={orderCount} />
        <p className="mt-6 text-xs text-stone-400">Made with warmth and love</p>
      </section>
    </main>
  );
}
