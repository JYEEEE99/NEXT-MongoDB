import Link from "next/link";
import connectDB from "../utill/database";

export default function Home({ result }) {
  return (
    <div>
      <h1>Data from MongoDB</h1>
      <Link href="/list">List</Link>
      <Link href="/write" style={{ marginLeft: "15px" }}>
        Write
      </Link>
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
