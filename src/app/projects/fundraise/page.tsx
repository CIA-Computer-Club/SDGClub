import MenuButton from "@/components/MenuButton";
import Image from "@/components/Image"

export default function Fundraiser() {
  return (
    <main className="flex flex-col items-center justify-between w-screen min-h-screen">
      <div className="relative w-screen h-screen">
        <MenuButton></MenuButton>
            <div className="ps-40 pl-20">

                <p className="text-2xl pb-4">Fundraiser</p>
            </div>
        </div>
    </main>
  );
}
