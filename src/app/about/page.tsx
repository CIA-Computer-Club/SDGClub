import MenuButton from "@/components/MenuButton";
import ProfileCard from "@/components/ProfileCard";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mx-auto w-full"><MenuButton></MenuButton></div>

      <div className="">
        <ProfileCard src="https://github.com/sliden101.png" name="Theanlay Se" title="President" quote={"Hi! I'm the president of the SDG Startup Club. I started this club because I have an interest in bettering our community in different ways socially, environmentally, and economically."}></ProfileCard>
      </div>
    </main>
  );
}
