import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

function HomePage() {
  let frontpage = useBaseUrl("/frontpage/index.html");

  React.useEffect(() => {
    // Redirect to the static index.html
    window.location.href = frontpage;
  }, []);

  // Render an empty component
  return null;
}

export default HomePage;
