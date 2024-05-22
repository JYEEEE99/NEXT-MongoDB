"use client"
import Link from "next/link";
import { useEffect } from "react";

export default function ListItem({ result }) {
    useEffect(() => {


    }, [])
    return (
        <>
            {
                result.map((a, i) => {
                    return (
                        <div className="list-item" key={i}>
                            <Link prefetch={false} href={`detail/${result[i]._id}`} title="자세히 보기">
                                <h4>{result[i].title}</h4>
                            </Link>
                            <p style={{ marginTop: "10px", fontWeight: "500", color: "#222" }}>
                                {result[i].content}</p>
                            <p style={{ fontSize: "14px", marginTop: "10px" }}>
                                {result[i].writeTime}</p>
                        </div>
                    );
                })
            }
        </>
    )
}