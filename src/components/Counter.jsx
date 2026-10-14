import { useState } from 'react'
import { Coffee, Plus, ArrowRight } from 'lucide-react'

export default function ChaiCounter({ onPlaceOrder }) {
  const [count, setCount] = useState(0)

  const addChai = () => setCount((previous) => previous + 1)

  return (
    <div className="space-y-3">
      <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5">
        <p className="text-xs font-bold tracking-widest text-stone-500">
          YOUR CHAI ORDER
        </p>

        <p className="mt-2 flex items-center gap-2 text-3xl font-bold text-amber-900">
          <Coffee size={28} aria-hidden="true" />

          <span aria-label={`${count} ${count === 1 ? 'cup' : 'cups'}`}>
            {count}
          </span>

          <span className="text-sm font-normal text-stone-500">
            {count === 1 ? 'cup' : 'cups'}
          </span>
        </p>
      </div>

      <button
        type="button"
        className="flex w-full items-center cursor-pointer justify-center gap-2 rounded-xl bg-amber-100 px-4 py-3 font-semibold text-amber-900 transition hover:bg-amber-200"
        onClick={addChai}
      >
        <Plus size={18} aria-hidden="true" />
        Add Chai
      </button>

      <button
        type="button"
        className="flex w-full items-center cursor-pointer justify-center gap-2 rounded-xl bg-amber-900 px-4 py-3 font-semibold text-white transition hover:bg-amber-950 disabled:cursor-not-allowed disabled:opacity-40"
        onClick={() => onPlaceOrder(count)}
        disabled={count === 0}
      >
        Place Your Order
        <ArrowRight size={18} aria-hidden="true" />
      </button>

      <p className="text-xs text-stone-400">
        Add your favourite chai, one cup at a time.
      </p>
    </div>
  )
}
