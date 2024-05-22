"use client";

import { useRouter } from "next/router";

export default function DetailLink() {
  // useRouter 는 client컴포넌트 안에서만 사용할 수 있음
  // client 컴포넌트란? 파일 상단에 "use client" 라고 작성된 파일 자세히는 모름
  let router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/");
      }}
    >
      Home
    </button>
  );
}
