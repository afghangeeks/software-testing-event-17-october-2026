import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";

export default function Greeting({ orderCount }) {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (orderCount === 0) return;
    const controller = new AbortController();

    async function fetchGreeting() {
      setLoading(true);
      setError(false);

      try {
        const response = await fetch(
          new URL("/api/hello", window.location.origin),
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error("Could not fetch greeting");
        }

        const data = await response.json();

        if (typeof data.name !== "string") {
          throw new Error("Invalid greeting response");
        }

        setName(data.name);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(true);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchGreeting();

    return () => controller.abort();
  }, [orderCount]);

  if (orderCount === 0) return null;

  if (loading) {
    return (
      <p className="mt-5 rounded-xl bg-amber-50 p-4 text-sm text-amber-900">
        Preparing your warm welcome...
      </p>
    );
  }

  if (error) {
    return (
      <p
        className="mt-5 rounded-xl bg-red-50 p-4 text-sm text-red-700"
        role="alert"
      >
        Could not load your greeting. Please try again.
      </p>
    );
  }

  return (
    <div
      className="mt-5 rounded-2xl border border-green-100 bg-green-50 p-5"
      role="status"
    >
      <CheckCircle
        size={40}
        className="mx-auto mb-3 text-green-700"
        aria-hidden="true"
      />

      <h2 className="font-serif text-xl font-bold text-green-900">
        {name ? `Salam, ${name}!` : "Salam!"}
      </h2>

      <p className="mt-2 text-sm leading-6 text-green-800">
        Your order of{" "}
        <strong>
          {orderCount} {orderCount === 1 ? "cup" : "cups"} of chai
        </strong>{" "}
        has been received.
      </p>

      <p className="mt-3 text-xs text-green-700">Enjoy every sip!</p>
    </div>
  );
}
