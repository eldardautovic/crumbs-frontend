const IconUpload = ({ width = 24 }: { width?: number }) => {
  return (
    <svg
      style={{ width: width, height: width }}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M5 12V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V12"
        stroke="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15L12 3M12 3L8 7M12 3L16 7"
        stroke="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconUpload;
