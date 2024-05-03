import MenuButton from "@/components/MenuButton";
import Image from "@/components/Image"

export default function Fundraiser() {
  return (
    <main className="flex flex-col items-center justify-between w-screen min-h-screen">
      <div className="relative w-screen h-screen">
        <MenuButton></MenuButton>
        <div className="ps-40 pl-20">
            <p className="text-2xl pb-4">Fundraiser</p>
            <p className="pt-4 pb-4">We started a funraising campaign and partnered with the culinary club to provide complimentary meals and beverages to the valued janitorial, and maintainence staff at our school. This alligns with SDGs such as:</p>
            
            <p className="pt-4 pb-4">
              <p>SDG 2: Zero Hunger, by offering free meals we ensure access to nutritious food and promote the health and wellbeing of the staff.</p>
              <p>SDG 10: Reduced Inequalities, this fundraiser was made to reduce inequalities by recognizing the contributions of janitors and ensuring they have support and appreciation.</p>
              <p>SDG 17: Partnership for Goals, the collaboration between the two clubs demonstrates importance of partnership ane collaboration in acheiving sustainable development objectives. </p>
            </p>
        </div>
        <div className="items-center justify-center content-center flex flex-col p-8">
          <Image className="py-12"
            src={"/assets/fundraise/food1.jpg"}
            width="900"
            height="500"
            alt="tree"
          ></Image>
          <Image className="py-12"
            src={"/assets/fundraise/food2.jpg"}
            width="900"
            height="500"
            alt="tree"
          ></Image>
          <Image className="py-12"
            src={"/assets/fundraise/food3.jpg"}
            width="900"
            height="500"
            alt="tree"
          ></Image>

        </div>
        </div>
    </main>
  );
}
