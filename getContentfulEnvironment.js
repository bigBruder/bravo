// import contentfulManagement from "contentful-management"

// module.exports = function () {
//   const contentfulClient = contentfulManagement.createClient({
//     accessToken: "CFPAT-bFhH9oFdTVtp2RifGyS8NPbNmDjaaOZeJzL3ZPNEe18",
//   });

//   return contentfulClient
//     .getSpace(process.env.VITE_SPACE_ID)
//     .then((space) => space.getEnvironment("master"));
// };
import contentfulManagement from "contentful-management";

export default async function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: "CFPAT-bFhH9oFdTVtp2RifGyS8NPbNmDjaaOZeJzL3ZPNEe18",
  });

  // Use dynamic import to load the environment
  const space = await import(`contentful.js?space_id=5ergat68efwn`);
  return space.getEnvironment("master");
}
