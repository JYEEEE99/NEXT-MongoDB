import connectDB from "@/utill/database";

export default async function handler(요청, 응답) {

  if (요청.method == "POST") {
    if (요청.body.title.length < 3) {
      return 응답.status(200).json("제목이 너무 짧음");
    }
    try {
      let db = (await connectDB).db("forum");
      let result = await db.collection("post").insertOne(요청.body);
      응답.status(200).redirect("/list");
    } catch (error) {
      응답.status(500).alret("뭔가 잘못 됌");
    }
  }
}
