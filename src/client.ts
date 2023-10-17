import { createClient } from "contentful";

const spaceId = import.meta.env.VITE_SPACE_ID;
const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

export const client = createClient({
  space: spaceId,

  accessToken: accessToken,
});
