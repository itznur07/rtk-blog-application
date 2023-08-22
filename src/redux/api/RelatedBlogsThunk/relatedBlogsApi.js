import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRelatedBlogs = createAsyncThunk(
  "relatedBlogs/getRelatedBlogs",
  async ({ tags, id }) => {
    let queryString = "";

    tags.length > 0
      ? (queryString +=
          tags.map((tag) => `tags_like=${tag}`).join("&") +
          `&id_ne=${id}&_limit=3`)
      : "&id_ne=${id}";

    const res = await fetch(`http://localhost:9000/blogs/?${queryString}`);
    const data = await res.json();

    return data;
  }
);
