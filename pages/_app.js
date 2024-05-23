import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import LogInBtn from "./logInBtn";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
function Navbar() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="navbar">
      <Link href="/" className="logo navbarA">
        DF MongoDB
      </Link>
      <Link href="/list" className="navbarA">
        List
      </Link>
      <Link href="/write" className="navbarA">
        Write
      </Link>
      {session ? (
        <div className="user__box">
          <p>Email: {session.user.email}</p>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      ) : (
        <div className="user__box">
          <LogInBtn />
        </div>
      )}
    </div>
  );
}

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
