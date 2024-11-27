import {Navbar} from "@/components/navbar";
import {Cards} from "@/components/cards";
import Footer from "@/components/footer";

export default function Home() {
  return (
      <main className="relative flex justify-center items-center
                flex-col overflow-clip mx-auto">
          <div className="w-full mx-auto font-wixFont">
              <Navbar/>
              <Cards/>
              <Footer/>
          </div>
      </main>
  );
}
