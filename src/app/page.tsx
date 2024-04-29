import MenuButton from "@/components/MenuButton";
import Footer from "@/components/Footer";
import Image from "@/components/Image";
import Link from "@/components/Link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between w-screen min-h-screen">
      <div className="bg-[url('/assets/front.jpg')]">
        <div className="relative w-screen h-screen">
          <MenuButton></MenuButton>
          <div className="absolute pt-40 ps-20">
            <p className="text-8xl text-white">SDG Startup Club</p>
            <p className="text-2xl text-white">2023-2024</p>
          </div>
        </div>  
      </div>

      {/*ABOUT US*/}
      <div className="bg-inherit">
      <div className="">
            <p className="text-8xl text-white">BALSS</p>
            <p className="text-2xl text-white">2023-2024</p>
          </div>
      </div>      
      
      {/*CLICK ME*/}
      <div className="bg-inherit">
        <div className="flex flex-row">
          <Image
            src={"/assets/goals.jpg"}
            alt={"goals"}
            width={800}
            height={800}
          >

          </Image>
          <p className="pt-20">CLICK ME</p>
        </div>
      </div>

      {/*Tree Planting*/}
      <div className="bg-inherit py-10">
      <div className="flex flex-col">
          <Image
            src={"/assets/tree.jpg"}
            alt={"goals"}
            width={800}
            height={800}
          >
          </Image>
            <p className="text-4xl text-black text-center pt-4"><Link href={"/projects/tree-plant"}>Tree Planting</Link></p>
          </div>
      </div>   

      {/*Fundraiser*/}
      <div className="bg-inherit py-10">
      <div className="flex flex-col">
          <Image
            src={"/assets/fundraiser.jpg"}
            alt={"goals"}
            width={800}
            height={800}
          >
          </Image>
            <p className="text-4xl text-black text-center pt-4"><Link href={"/projects/fundraise"}>Fundraiser</Link></p>
          </div>
      </div>      



      <div className="bg-[url('/assets/mountain.jpg')]">
          <div className=""><Footer></Footer></div>

      </div>
    </main>
  );
}
