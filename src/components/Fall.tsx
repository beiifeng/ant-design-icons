import * as React from "react";

const Fall: React.SFC<object> = (props: object) => (
  <svg
    fill="currentColor"
    viewBox="0 0 1024 1024"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M925.9 804l-24-199.2c-.8-6.6-8.9-9.4-13.6-4.7L829 659.5 557.7 388.3c-6.3-6.2-16.4-6.2-22.6 0L433.3 490 156.6 213.3c-3.1-3.1-8.2-3.1-11.3 0l-45 45.2c-3.1 3.1-3.1 8.2 0 11.3L422 591.7c6.2 6.3 16.4 6.3 22.6 0L546.4 490l226.1 226-59.3 59.3c-4.7 4.7-1.9 12.8 4.7 13.6l199.2 24c5.1.7 9.5-3.7 8.8-8.9z" />
  </svg>
);

Fall.displayName = "Fall";

export default Fall;