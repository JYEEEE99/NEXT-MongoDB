export default function Write() {
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
      <h4>글 작성</h4>
      <form action="/api/post/new" method="POST">
        <input type="text" name="title" placeholder="제목" />
        <input type="text" name="content" placeholder="내용" />
        <input type="text" name="writeTime"
          style={{ display: "none" }} defaultValue={writeTime} />
        <button type="submit">작성하기</button>
      </form>
    </div>
  );
}
