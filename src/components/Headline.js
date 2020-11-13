import React from "react";

import { VscGithub, VscPreview, VscLiveShare } from "react-icons/vsc";

function Headline() {
  return (
    <section className="headline">
      <div className="headline-width-wrapper">
        <h1>Demo Your Projects With Ease</h1>
        <p>
          DemoHub is a platform for developers to showcase their projects in an
          organized way.
        </p>
        <div className="boxes">
          <div className="box">
            <span className="icon" role="img">
              <VscGithub size={140} />
            </span>
            <p>Connect your GitHub and import your projects with one click.</p>
          </div>
          <div className="box">
            <span className="icon" role="img">
              <VscPreview size={140} />
            </span>
            <p>Upload preview images or videos via YouTube for each project.</p>
          </div>
          <div className="box">
            <span className="icon" role="img">
              <VscLiveShare size={140} />
            </span>
            <p>
              Share projects by tech stack with recruiters, developers, anyone
              you want!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Headline;
