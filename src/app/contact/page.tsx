import MenuButton from "@/components/MenuButton";
import ContactForm from "@/components/ContactForm";
import Image from "@/components/Image"
export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-between w-screen min-h-screen">
      <div className="relative w-screen h-screen">
        <MenuButton></MenuButton>
        <div className="justify-center flex flex-row pt-40">
          <ContactForm></ContactForm>
          <Image className="p-8"
             src="/assets/logo.png"
             width="200"
             height="100"
             alt="cum"
            ></Image>

        </div>
        </div>
    </main>
  );
}
