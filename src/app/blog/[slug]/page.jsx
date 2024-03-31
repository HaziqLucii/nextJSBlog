import React, { Suspense } from "react";
import styles from "./singlepost.module.css";
import Image from "next/image";
import PostUser from "@/components/postUser/PostUser";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { getPost } from "@/lib/data";

// fetch data with an api
// const getData = async (slug) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${slug}`,
//     { cache: "no-store" }
//   );

//   if (!res.ok) {
//     throw new Error("Something went wrong!");
//   }

//   return res.json();
// };

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  // const post = await getData(slug);
  const post = await getPost(slug);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/19294343/pexels-photo-19294343/free-photo-of-pink-car.jpeg"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/19294343/pexels-photo-19294343/free-photo-of-pink-car.jpeg"
            alt=""
            className={styles.avatar}
            width={50}
            height={50}
          />
          <Suspense fallback={<Skeleton />}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
