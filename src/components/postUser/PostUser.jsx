import { getUser } from "@/lib/data";
import styles from "./postuser.module.css";
import Image from "next/image";

// const getUser = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`
//   );

//   if (!res.ok) {
//     throw new Error("Something wrong when fetching the user data.");
//   }

//   return res.json();
// };

const PostUser = async ({ userId }) => {
  //   const user = await getUser(userId);
  const user = await getUser(userId);
  return (
    <div className={styles.container}>
      <Image
        src={user.img ? user.img : "/noavatar.png"}
        alt=""
        className={styles.avatar}
        width={50}
        height={50}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
