"use server";
import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";

export const addPost = async (formData) => {
  //   const title = formData.get("title");
  //   const desc = formData.get("description");
  //   const slug = formData.get("slug");

  const { title, description, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDb();

    const newPost = new Post({
      title,
      description,
      slug,
      userId,
    });

    await newPost.save();
    console.log("Saved to db");
    revalidatePath("/blog");
  } catch (error) {
    throw new Error("There some unexpected error: ", error);
  }
};

export const deletePost = async (formData) => {
  "use server";

  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("Deleted from DB");

    revalidatePath("/blog");
  } catch (error) {
    throw new Error("There some unexpected error: ", error);
  }
};
