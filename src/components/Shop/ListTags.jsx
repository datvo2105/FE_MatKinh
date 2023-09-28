import { useState } from "react";

const ListTags = () => {
  const [showTags, setShowTags] = useState(false);
  return (
    <div className="sidebar_widget filterBox filter-widget">
      <div
        className={`widget-title ${showTags ? "" : "active"}`}
        onClick={() => {
          setShowTags(!showTags);
        }}
      >
        <h2>Tags</h2>
      </div>
      <ul
        className={showTags ? "d-none  opacity-0 overfollow-hidden" : ""}
        style={{
          transition: "all 10ms ease",
          opacity: 1,
          overflow: "visible",
        }}
      >
        <li>
          <input type="checkbox" id="check1" />
          <label htmlFor="check1">
            <span>
              <span></span>
            </span>
            New
          </label>
        </li>
        <li>
          <input type="checkbox" id="check3" />
          <label htmlFor="check3">
            <span>
              <span></span>
            </span>
            Sales
          </label>
        </li>
      </ul>
    </div>
  );
};

export default ListTags;
