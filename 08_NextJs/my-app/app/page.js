import React from "react";
import Link from "next/link";

function MainPage() {
  return <div>
    <h1>Home Page</h1>
    <Link href="/blog">Blog Page</Link>
  </div>;
}

export default MainPage;
