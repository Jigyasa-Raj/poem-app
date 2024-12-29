import Link from "next/link"

export default function Footer() {
  return (
    <footer className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <nav className="flex flex-col md:flex-row gap-6 md:gap-8 text-sm">
          <Link href="/photo/bicycle-silhouette" className="text-gray-600 hover:text-gray-900">
            About
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
          <Link href="https://www.instagram.com/j1gyasa/" className="text-gray-600 hover:text-gray-900">
            Instagram @j1gyasa
          </Link>
          <Link href="https://www.linkedin.com/in/jigyasa-raj-033063235/" className="text-gray-600 hover:text-gray-900">
            LinkendIn
          </Link>
        </nav>
        <div className="text-sm text-gray-600">
          <Link href="https://www.github.com/Jigyasa-Raj" className="underline hover:text-gray-900">
            by jigyasa (github)
          </Link>
        </div>
      </div>
    </footer>
  )
}

