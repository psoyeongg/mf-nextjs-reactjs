import React from "react";
import { /* Button,*/ Seo } from "../components";

import dynamic from "next/dynamic";

export default function Hook() {
  // const ClassButton = dynamic(async () => await import("remote/ClassButton"));
  const Button = dynamic(async () => await import("remote/Button"));
  ㄴㄴㄴ;
  return (
    <div>
      <Seo title="Hook" />
      <p>hook 사용된 버튼 들어간다</p>
      <div
        style={{ border: "1px solid black", height: "300px", margin: "20px" }}
      >
        <Button />
        {/* <ClassButton /> */}
        <Button />
      </div>
    </div>
  );
}
