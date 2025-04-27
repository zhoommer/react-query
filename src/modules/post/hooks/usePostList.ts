import { useQuery } from "@tanstack/react-query";
import { type Post } from "../types";

export default function usePostList() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: async (): Promise<Array<Post>> => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      return await response.json();
    }
  });
};
