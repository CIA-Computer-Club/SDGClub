import MenuButton from "@/components/MenuButton";
import Image from "@/components/Image"

export default function TreePlant() {
  return (
    <main className="flex flex-col items-center justify-between w-screen min-h-screen">
      <div className="relative w-screen h-screen">
        <MenuButton></MenuButton>
        <div className="ps-40 pl-20">
            <p className="text-2xl pb-4">Tree Planting Trip</p>
            <p className="pt-4 pb-4">Our club embarked on a mission to plant trees, solidifying our dedication to environmental conservation and community betterment. This initiative aligns with several SDGs, including:</p>
            
            <p className="pt-4 pb-4">
            <p>SDG 15: Life on Land, which aims to protect, restore, and promote the sustainable use of terrestrial ecosystems</p>
            <p>SDG 13: Climate Action, which seeks to combat climate change and its imoacts. </p>
            </p>
        </div>
        <div className="items-center justify-center content-center flex flex-col p-8">
          <Image className="py-12"
            src={"/assets/tree/tree1.jpg"}
            width="900"
            height="500"
            alt="tree"
          ></Image>
          <Image className="py-12"
            src={"/assets/tree/tree2.jpg"}
            width="900"
            height="500"
            alt="tree"
          ></Image>
          <Image className="py-12"
            src={"/assets/tree/tree3.jpg"}
            width="900"
            height="500"
            alt="tree"
          ></Image>
          <Image className="py-12"
            src={"/assets/tree/tree4.jpg"}
            width="900"
            height="500"
            alt="tree"
          ></Image>
          <Image className="py-12"
            src={"/assets/tree/tree5.jpg"}
            width="900"
            height="500"
            alt="tree"
          ></Image>

        </div>
        </div>
    </main>
  );
}
