import MenuButton from "@/components/MenuButton";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <div className="mx-auto w-full"><MenuButton></MenuButton></div>
      <div className=""><Footer></Footer></div>
    </main>
  );
}
