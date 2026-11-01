import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center text-center flex-1 px-4">
      <h1 className="text-3xl font-bold mb-3">Node.js Learnings</h1>
      <p className="text-fd-muted-foreground max-w-xl mb-6">
        My notes from the Node.js course series, organized by part and topic, for revision and
        as a reference while building.
      </p>
      <Link
        href="/docs"
        className="rounded-lg bg-fd-primary px-4 py-2 font-medium text-fd-primary-foreground"
      >
        Open the notes
      </Link>
    </div>
  );
}
