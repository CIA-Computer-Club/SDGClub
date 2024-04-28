import MenuButton from "@/components/MenuButton";
import ContactForm from "@/components/ContactForm";
import Image from "@/components/Image"
export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-between w-screen min-h-screen">
      <div className="relative w-screen h-screen">
        <MenuButton></MenuButton>
        <div className="justify-center w-1/4 pt-20 ps-40">
          <ContactForm></ContactForm>
          
        </div>
        </div>
    </main>
  );
}
