export default function h({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>
        <h1 className="text-red-900 text-3xl text-center font-semibold">For Next few 20% is Off on Every Course</h1>
      </div>
      {children}
    </div>
  );
}
