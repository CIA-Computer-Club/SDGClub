import MenuButton from "@/components/MenuButton";
import Footer from "@/components/Footer";
import Image from "@/components/Image";
import Link from "@/components/Link";
import CircleButton from "@/components/CircleButton";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between w-screen min-h-screen">
      <div className="bg-[url('/assets/front.jpg')]">
        <div className="relative w-screen h-screen">
          <MenuButton></MenuButton>
          <div className="absolute pt-40 ps-20 flex flex-row">
            <div>
              <p className="text-8xl text-white">SDG Startup Club</p>
              <p className="text-2xl text-white">2023-2024</p>
            </div>
            <Image
             src="/assets/logo.png"
             width="200"
             height="100"
             alt="cum"
            ></Image>
          </div>
        </div>  
      </div>

      {/*ABOUT US*/}
      <div className="bg-inherit p-8 flex flex-row">
        <div className="w-3/4">
            <p className="text-2xl text-black text-center">We are a team of high school students dedicated to fostering sustainable development and achieving the United Nations Sustainable Development Goals.</p>
        </div>
        <div className="">
          <Link href={"/about"}><CircleButton description="About Us"></CircleButton></Link>
        </div>

      </div>      
      
      {/*CLICK ME*/}
      <div className="bg-inherit p-8">
        <div className="flex flex-row w-3/4">
          <Image
            src={"/assets/goals.jpg"}
            alt={"goals"}
            width={800}
            height={800}
          >

          </Image>
          <div className="pt-32">
            <Link href={"/about"}><CircleButton description="Click Me"></CircleButton></Link>
          </div>

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


      <div className=""><Footer></Footer></div>
    </main>
  );
}
  