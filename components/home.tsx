import Link from "next/link";
import { HomeIcon } from "lucide-react"; // Importing HomeIcon from lucide-react

const Home = () => {
  return (
    // Link is used to navigate to a page, and it's styled as a button
    <Link href="/">
      <button className="p-2 rounded-md text-black absolute top-4 right-16 z-50">
        {/* HomeIcon inside the button with appropriate size */}
        <HomeIcon className="w-6 h-6" />
      </button>
    </Link>
  );
};

export default Home;
