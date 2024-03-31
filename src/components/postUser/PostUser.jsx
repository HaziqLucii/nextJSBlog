import { getUser } from "@/lib/data";
import styles from "./postuser.module.css";

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
      <span className={styles.title}>Author</span>
      <span className={styles.username}>{user.name}</span>
    </div>
  );
};

export default PostUser;