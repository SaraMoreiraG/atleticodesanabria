import React, { useEffect, useState } from "react";

function NewMemberForm() {
  const [navbarHeight, setNavbarHeight] = useState(80); // Default height

  useEffect(() => {
    // Create a ResizeObserver instance
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.target.classList.contains("navbar")) {
          // Update the navbarHeight state when the navbar size changes
          setNavbarHeight(entry.target.offsetHeight);
        }
      }
    });

    // Observe the navbar element
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      resizeObserver.observe(navbar);
    }

    return () => {
      // Clean up the observer when the component unmounts
      resizeObserver.disconnect();
    };
  }, []);
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "ff-script";
    script.src =
      "https://formfacade.com/include/115140183290459632367/form/1FAIpQLSe9VlnRraXky_wi2Hi_R_wJC49WWc5wLPDXtmTu2UZF9VCk2Q/clean.js?div=ff-compose";
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="new-member-form" style={{ paddingTop: navbarHeight + "px" }}>
  <div id="ff-compose" className="my-5"></div>
  </div>
  );
}

export default NewMemberForm;