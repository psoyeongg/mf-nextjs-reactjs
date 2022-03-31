import React from "react";
import { Seo } from "../components";

import dynamic from "next/dynamic";

export default function UserPage() {
  const Users = dynamic(
    async () => {
      try {
        return await import("user/pages/Default");
      } catch (e) {
        return (
          <div>
            <h3>에러 발생</h3>
            <div>대체 페이지~</div>
          </div>
        );
      }
    },
    { ssr: false }
  );
  return (
    <div>
      <Seo title="User" />
      <div
        style={{ border: "1px solid black", height: "300px", margin: "20px" }}
      >
        <Users />
      </div>
    </div>
  );
}
