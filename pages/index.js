import connectDB from "../utill/database";
import { useSession, signOut } from "next-auth/react";
import LogInBtn from "./logInBtn";

export default function Home({ result }) {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Data from MongoDB</h1>
    </div>
  );
}

export async function getServerSideProps() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return {
    props: {
      result: JSON.parse(JSON.stringify(result)),
    },
  };
}
