"use client";
import Link from "next/link";

export default function ListItem({ result }) {
  console.log(result);
  // result가 정의되지 않거나 배열이 아니면 오류 메시지를 반환합니다.
  if (!result || !Array.isArray(result)) {
    console.log("No items found or result is not an array");
    return <div>No items found</div>;
  }
  return (
    <>
      {result.map((a, i) => {
        return (
          <div className="list-item" key={i}>
            <Link
              prefetch={false}
              href={`detail/${result[i]._id}`}
              title="자세히 보기"
            >
              <h4>{result[i].title}</h4>
            </Link>
            <p style={{ marginTop: "10px", fontWeight: "500", color: "#222" }}>
              {result[i].content}
            </p>
            <p style={{ fontSize: "14px", marginTop: "10px" }}>
              {result[i].writeTime}
            </p>
          </div>
        );
      })}
    </>
  );
}
