import connectDB from "@/utill/database";
import { ObjectId } from "mongodb";

export default function Edit({ result }) {
    let data = new Date();
    let year = data.getFullYear() + "년 ";
    let month = data.getMonth() + 1 + "월 ";
    let date = data.getDate() + "일 ";

    let hour = data.getHours() + "시 ";
    let min = data.getMinutes() + "분 ";
    let sec = data.getSeconds() + "초 ";
    const writeTime = year + month + date + hour + min + sec;
    return (
        <div className="p-20">
            <h4>수정 페이지</h4>
            <form action="/api/post/edit" method="POST">
                <input type="text" name="title" defaultValue={result.title} />
                <input type="text" name="content" defaultValue={result.content} />
                <input type="text" name="writeTime" value={writeTime} />
                <input style={{ display: "none" }} type="text" name="_id" value={result._id} />
                <button type="submit">수정 하기</button>
            </form>
        </div>
    );
}
export async function getServerSideProps(context) {
    try {
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