import Link from "next/link"

export default function Navbar() {
    return (
    <>
      <Link href="/">Home</Link>
      <br />
      <Link href="about/">Go to About Page</Link>
      <br/>
      <Link href="products/">Go to Products Page</Link>
    </>
  )
}