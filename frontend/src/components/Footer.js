import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 text-center p-4 mt-auto">
      © {new Date().getFullYear()} Alumni Connect. All rights reserved.
    </footer>
  );
}

export default Footer;
