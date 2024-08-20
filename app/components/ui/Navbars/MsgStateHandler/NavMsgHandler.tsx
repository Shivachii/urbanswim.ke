import { introMsg } from "@/app/lib/data";

export default function NavMsgHadler() {
  return (
    <main className="flex items-center justify-center  bg-black">
      <div className="flex flex-col items-center w-64 p-2 m-2 justify-center text-white text-center">
        {introMsg.map((msg) => (
          <span key={msg.id} className="">
            {msg.name}
          </span>
        ))}
      </div>
    </main>
  );
}
