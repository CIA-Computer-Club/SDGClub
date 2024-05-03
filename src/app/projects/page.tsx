import MenuButton from "@/components/MenuButton";
import Image from "@/components/Image";
import Link from "@/components/Link";

export default function Projects() {
  return (
    <main className="flex flex-col items-center justify-center w-screen min-h-screen">
      <div className="relative w-screen h-screen">
        <MenuButton></MenuButton>
        
        {/*Tree Planting*/}
        <div className="items-center justify-center content-center flex flex-col p-8">

        <div className="flex flex-col py-8">
            <Image
              src={"/assets/tree.jpg"}
              alt={"goals"}
              width={800}
              height={800}
            >
            </Image>
              <p className="text-4xl text-black text-center pt-4"><Link href={"/projects/tree-plant"}>Tree Planting</Link></p>
            </div>

        {/*Fundraiser*/}
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

      </div>
    </main>
  );
}
