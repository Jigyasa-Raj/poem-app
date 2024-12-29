
import Header from "../components/header"
import ImageGrid from "../components/image-grid"
import Footer from "../components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 pb-16">
        <ImageGrid />
      </main>
      <Footer />
    </div>
  )
}

