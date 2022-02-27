import TopBar from "../components/topbar";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

export default function Example() {
  return (
    <div>
      <TopBar />
      <section id="home" className="px-6  min-h-screen w-screen  ">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
          <h1
            className="text-5xl lg:text-6xl text-white font-black text-center tracking-tight mb-10 w-full sm:w-3/4"
            style={{
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            Issue reproduction page
          </h1>

          <Subscribe />
        </div>
      </section>

      <Footer />
    </div>
  );
}
