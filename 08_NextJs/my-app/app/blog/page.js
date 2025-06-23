import Link from "next/link";
import React from "react";

function BlogPage() {
  return <div>
    <h1 className="title">Blog Page</h1>
    <Link href="/">Home Page</Link>
    <Link href="/blog/1">Single Blog</Link>
  </div>;
}

export default BlogPage;
