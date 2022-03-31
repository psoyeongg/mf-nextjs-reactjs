import React from "react";
import { Seo, Button } from "../components";

import dynamic from "next/dynamic";

export default function Potato() {
  const About = dynamic(
    async () => {
      try {
        return await import("remote/pages/About");
      } catch (e) {
        <div>
          <h3>에러 발생</h3>
          <div>대체 페이지~</div>
        </div>;
      }
    },
    { ssr: false }
  );

  return (
    <div>
      <Seo title="About" />
      <div>
        Host App
        <Button />
      </div>
      <div
        style={{ border: "1px solid black", height: "300px", margin: "20px" }}
      >
        <About />
      </div>
    </div>
  );
}
