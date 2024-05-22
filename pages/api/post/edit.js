import connectDB from "@/utill/database";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {

    if (요청.method == "POST") {
        let obj = {
            title: 요청.body.title,
            content: 요청.body.content,
            writeTime: 요청.body.writeTime
        }
        console.log(obj, 요청.body._id);
        let db = (await connectDB).db("forum");
        let result = await db.collection("post").updateOne(
            { _id: new ObjectId(요청.body._id) },
            { $set: obj }
        )
        응답.status(200).redirect('/list')
    }
}

