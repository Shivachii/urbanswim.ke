import NavMsgHadler from "./MsgStateHandler/NavMsgHandler";

export const revalidate = 1;

export default async function NavMsg() {
  return (
    <main className="">
      <p>
        <NavMsgHadler />
      </p>
    </main>
  );
}
