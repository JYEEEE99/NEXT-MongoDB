import connectDB from "@/utill/database";

export default async function handler(요청, 응답) {
  let data = new Date();
  let year = data.getFullYear() + "년";
  let month = data.getMonth() + 1 + "월";
  let date = data.getDate() + "분";

  let hour = data.getHours() + "시";
  let min = data.getMinutes() + "분";
  let sec = data.getSeconds() + "초";
  const writeTime = year + month + date + hour + min + sec;
  console.log(writeTime);
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  return 응답.status(200).json(요청.body);
}
