import Nav from "@/components/Nav";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Layout({children}) {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-blue-950 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button
            onClick={() => signIn("google")}
            className="bg-white py-2 px-7 rounded-lg hover:text-blue-900 font-bold"
          >
            {" "}
            Login with Google
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-blue-950 min-h-screen flex ">
      <Nav />

      <div className="flex flex-grow gap-7 bg-white m-2 p-2 rounded-lg">
      {children}
    
      </div>
      <button className="px-7 bg-blue-950 text-black rounded-lg " onClick={() => signOut()}>
          Sign out Now
        </button>
    </div>
  );
}
