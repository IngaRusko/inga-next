import Link from "next/link";

export default function Contacts() {
  return (
    <div >
      <h1 className="heading">Sveiki iš kontaktų</h1>
      <Link href="/">Grįžti į pagrindinį</Link>
      <Link href="/apie-mus">Pereiti į apie mus</Link>
    </div>
  );
}
