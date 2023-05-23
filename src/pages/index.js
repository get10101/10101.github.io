import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

function HomePage() {
  let frontpage = useBaseUrl("/frontpage/index.html");

  React.useEffect(() => {
    let params = document.location.search;
    // Redirect to the static index.html
    window.location.href = frontpage + params;
  }, []);

  // Render an empty component
  return null;
}

export default HomePage;
