import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { IoIosAddCircle } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();
  const [roomId, setRoomId] = useState("");

  const createAndJoin = () => {
    const roomId = uuidv4();
    router.push(`/${roomId}`);
  };

  const joinRoom = () => {
    if (roomId) router.push(`/${roomId}`);
    else {
      alert("Please provide a valid room id");
    }
  };
  return (
    <div className="min-h-screen gap-8 flex flex-col justify-center items-center px-4">
      
      {/* <h1 className="text-5xl font-extrabold tracking-tighter">Chatterbox</h1> */}
      <Image
        src={"/logos/svgexport-27.svg"}
        width={1000}
        height={1000}
        className="sm:w-96 w-full h-auto"
        alt="Chatterbox Logo"
      ></Image>
      <Input
        className="sm:w-96 w-full"
        placeholder="Enter Room ID"
        value={roomId}
        onChange={(e) => setRoomId(e?.target?.value)}
      />
      <div className="flex flex-row sm:w-96 w-full justify-center items-center flex-wrap gap-4">
        <button
          className="bg-primary/5 px-4 py-2 rounded-lg border-2 border-primary/50 hover:bg-primary/10 transition-all duration-300 ease-in-out hover:border-primary/80 inline-flex flex-row flex-wrap items-center gap-1"
          onClick={joinRoom}
        >
          <IoIosAddCircle className="lg:size-6 size-5" />
          <span className="sm:text-base text-sm font-semibold">Join Room</span>
        </button>
        <button
          className="bg-primary/5 px-4 py-2 rounded-lg border-2 border-primary/50 hover:bg-primary/10 transition-all duration-300 ease-in-out hover:border-primary/80 inline-flex flex-row flex-wrap items-center gap-1"
          onClick={joinRoom}
        >
          <IoIosAddCircle className="lg:size-6 size-5" />
          <span className="sm:text-base text-sm font-semibold">Create Room</span>
        </button>
      </div>
    </div>
  );
}
