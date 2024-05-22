import connectDB from "@/utill/database";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default function List({ result = [] }) {
  return (
    <div className="list-bg">
      {result.map((a, i) => {
        return (
          <div className="list-item" key={i}>
            <Link prefetch={false} href={`detail/${result[i]._id}`}>
              <h4>{result[i].title}</h4>
            </Link>
            <p>2024 / 05 / 22</p>
          </div>
        );
      })}
      <DetailLink />
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const db = (await connectDB).db("forum");
    let result = await db.collection("post").find().toArray();

    return {
      props: {
        result: JSON.parse(JSON.stringify(result)),
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        result: [],
      },
    };
  }
}
