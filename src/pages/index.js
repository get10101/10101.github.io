import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

function HomePage() {
  let frontpage = useBaseUrl("/index.html");

  React.useEffect(() => {
    const currentURL = window.location.href;
    const isIndexPage = currentURL.includes("index.html");

    if (!isIndexPage) {
      console.log("it's not index html");
      let params = document.location.search;
      // Redirect to the static index.html
      window.location.href = frontpage + params;
      window.location.href = "/index.html";
    } else {
      console.log(`nope it's index html ${currentURL}`);
    }
  }, []);

  // Render an empty component
  return null;
}

export default HomePage;
