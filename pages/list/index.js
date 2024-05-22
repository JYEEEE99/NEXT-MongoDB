import connectDB from "@/utill/database";
import ListItem from "./ListItem";

export default function List({ result }) {
  console.log(result);
  return (
    <div className="list-bg">
      <ListItem result={result} />
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
