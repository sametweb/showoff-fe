import React from "react";

import { GoDeviceDesktop } from "react-icons/go";

function Main() {
  return (
    <section className="main">
      <div className="main-width-wrapper">
        <div className="row">
          <div className="text">
            <h2>Showcasing your projects has never been easier!</h2>
            <p>We know the importance of having a tidy portfolio.</p>
            <p>
              DemoHub provides a platform for job-seekers in the software
              development industry to gather all their projects in one place and
              allow them to be sharable and sortable by the tech stack.
            </p>
          </div>
          <GoDeviceDesktop size={250} />
        </div>
      </div>
    </section>
  );
}

export default Main;
