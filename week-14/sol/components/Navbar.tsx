import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="flex w-full p-2 justify-between">
      <div>welcome</div>
      <div className="flex gap-4">
        <Link href={"/"}>Home</Link>
        <Link href={"/server-page"}>server page</Link>
        <Link href={"/client-page"}>client Page</Link>
      </div>
    </div>
  );
};
