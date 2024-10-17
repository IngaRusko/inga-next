import Link from "next/link";

export default function AboutUs() {
  return (
    <div >
      <h1 className="heading">Sveiki iš apie mus</h1>
      <Link href="/">Grįžti į pagrindinį</Link>
      <Link href="/kontaktai">Pereiti į kontaktus</Link>
    </div>
  );
}