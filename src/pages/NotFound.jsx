import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg px-6 text-center">
      <p className="font-mono text-sm font-medium tracking-wide text-accent">404</p>
      <h1 className="mt-4 text-3xl font-bold text-text sm:text-4xl">Page not found</h1>
      <p className="mt-3 max-w-sm text-text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
      >
        <ArrowLeft size={16} />
        Back to home
      </Link>
    </div>
  );
}
