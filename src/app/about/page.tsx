import MenuButton from "@/components/MenuButton";
import ProfileCard from "@/components/ProfileCard";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="relative w-screen"><MenuButton></MenuButton></div>
      <div className="text-8xl"> Meet our Admins</div>
      <div className="">
        <ProfileCard src="/assets/profile/theanlay.jpg" name="Theanlay Se" title="President" quote={"''Hi! I''m the president of the SDG Startup Club. I started this club because I have an interest in bettering our community in different ways socially, environmentally, and economically.''"}></ProfileCard>
        
        <ProfileCard src="/assets/profile/sak.jpg" name="Puthisak Darith" title="Vice President" quote={"''Hello, I''m a passionate advocate for SDG stewardshiip and I am commited to driving positive change and fostering a culture of sustainability.''"}></ProfileCard>
        <ProfileCard src="/assets/profile/phanunt.jpg" name="Phanunt Neang" title="Vice President" quote={"''A group of monkeys is better than one monkey. Change occur with unity not disunity.''"}></ProfileCard>
        <ProfileCard src="/assets/profile/kevin.jpg" name="Ouk Kevin" title="Vice President" quote={"''Love the environment as much as Yeji...maybe.''"}></ProfileCard>
        
        <ProfileCard src="/assets/profile/mengly2.jpg" name="Panha Uy" title="Media Manager" quote={"''Capturing change, one click at a time''"}></ProfileCard>
        <ProfileCard src="/assets/profile/mengly.jpg" name="Mengly Aing" title="Media Manager" quote={"''Stop climate change 45 degrees is wild''"}></ProfileCard>

        <ProfileCard src="/assets/profile/rat.jpg" name="Rattanak Bun" title="Treasurer" quote={"''Stop climate change 45 degrees is wild''"}></ProfileCard>
        
        <ProfileCard src="/assets/profile/woman1.jpg" name="Rathpidor Pheaseth" title="Secretary" quote={"''Stop climate change 45 degrees is wild''"}></ProfileCard>
        
        <ProfileCard src="/assets/profile/woman2.jpg" name="Event Planner" title="Treasure" quote={"''Stop climate change 45 degrees is wild''"}></ProfileCard>


      </div>
    </main>
  );
}
