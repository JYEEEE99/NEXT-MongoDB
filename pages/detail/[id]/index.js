import connectDB from "@/utill/database";
import { ObjectId } from "mongodb";
import Link from "next/link";

export default function Detail({ result }) {
  return (
    <div>
      <h4>상세 페이지</h4>
      <p>{result.title}</p>
      <p>{result.content}</p>
      <Link href="/list">List</Link>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    console.log("context", context);
    // context.params를 통해 동적 라우팅 매개변수(id)를 가져옴
    const { id } = context.params;
    // 데이터베이스 연결
    const db = (await connectDB).db("forum");
    // ObjectId를 사용하여 해당 id에 해당하는 문서를 찾음
    let result = await db.collection("post").findOne({ _id: new ObjectId(id) });
    // JSON으로 변환하여 props로 반환
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
