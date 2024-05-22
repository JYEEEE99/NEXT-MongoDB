import Link from "next/link";
import connectDB from "../utill/database";

export default function Home({ result }) {
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
