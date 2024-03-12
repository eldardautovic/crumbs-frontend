const IconLogo = ({ width = 24 }: { width?: number }) => {
  return (
    <svg
      style={{ width: width, height: width }}
      viewBox="0 0 960 960"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M918.797 221.291C923.539 259.515 903.219 282.597 890.779 315.622C876.717 383.517 889.069 452.314 885.918 520.768C875.847 610.352 769.592 623.617 699.077 642.654C678.475 650.408 661.925 643.261 642.365 635.283C639.173 665.017 613.719 676.987 590.401 689.05C565.202 702.904 539.893 716.563 514.802 730.61C503.819 736.758 492.579 743.028 485.896 754.305C462.914 801.875 439.166 836.664 382.868 844.561C317.997 851.169 107.737 798.889 121.602 712.863C64.1799 677.576 19.2319 626.923 51.0589 557.45C82.1699 508.091 149.322 510.626 200.789 506.911C236.998 503.748 267.98 480.652 301.728 468.546C342.859 448.099 379.595 447.411 423.625 460.411C427.835 421.764 427.391 381.157 425.868 341.838C425.716 331.635 423.037 323.137 414.93 316.046C344.704 259.458 370.409 150.734 455.149 125.047C476.236 117.181 498.24 115.617 520.518 116.105C546.732 113.675 574.305 113.629 600.53 116.11C648.421 114.587 695.821 122.482 743.407 126.677C814.918 136.516 897.387 135.653 918.797 221.291ZM671.217 601.227C677.741 553.946 675.821 509.079 674.48 462.01C676.404 430.282 663.211 373.066 680.489 348.393C699.127 323.577 729.895 302.647 723.452 267.189C718.032 170.045 470.813 121.833 429.177 205.831C408.135 263.95 455.351 268.109 471.176 308.915C478.578 333.528 478.82 358.876 478.995 384.204C477.193 414.757 477.858 445.179 472.708 475.521C517.936 487.696 564.46 500.622 609.909 512.889C641.307 520.834 650.981 565.091 623.424 583.481C639.251 589.358 654.872 595.158 671.217 601.227ZM534.438 535.454C469.802 530.743 404.842 487.154 339.771 507.168C314.712 517.92 290.006 529.511 264.79 539.868C249.715 546.06 234.306 552.686 218.416 555.345C181.528 562.009 141.23 554.525 107.142 573.297C73.9569 589.082 121.165 614.43 136.015 623.816C197.361 654.229 264.003 682.898 333.544 683.081C350.364 682.1 357.884 676.024 356.276 660.991C350.964 615.4 401.763 594.499 435.529 578.6C467.582 563.661 500.341 550.24 534.438 535.454ZM561.359 626.84C561.298 625.771 561.237 624.701 561.176 623.632C551.907 623.632 541.539 620.91 533.569 624.128C506.573 635.026 480.013 647.228 454.134 660.573C441.72 666.974 430.315 675.685 423.311 689.207C393.023 752.966 322.343 757.878 260.469 754.257C314.412 783.342 405.344 800.075 431.828 728.304C437.34 715.218 442.08 701.759 452.171 690.872C458.649 683.883 466.894 680.735 474.712 676.333C503.615 659.874 532.141 642.751 561.359 626.84Z"
        fill="inherit"
      />
      <path
        d="M671.215 601.227C654.871 595.158 639.25 589.358 623.422 583.481C650.975 565.085 641.309 520.838 609.906 512.888C564.463 500.623 517.927 487.693 472.706 475.52C476.608 454.048 476.915 432.938 477.637 411.301C479.725 377.096 480.622 342.3 471.173 308.915C467.083 295.323 457.711 285.427 447.483 276.694C412.517 249.771 418.183 194.434 458.933 177.206C529.14 141.485 711.97 174.179 723.452 267.184C729.878 302.654 699.134 323.569 680.489 348.391C663.262 372.861 676.366 430.348 674.476 462.008C675.816 509.083 677.737 553.932 671.215 601.227ZM613.073 434.777C639.637 433.981 639.113 394.769 612.64 394.514C586.479 394.858 586.646 435.134 613.073 434.777ZM573.498 325.064C548.12 324.882 548.212 363.854 573.169 364.4C599.128 364.332 599.301 325.767 573.498 325.064ZM581.421 443.999C581.502 419.827 544.57 419.376 544.057 443.538C544.064 468.407 580.806 468.827 581.421 443.999ZM652.627 477.115C652.27 453.111 615.511 453.953 615.949 477.795C616.468 501.629 653.078 501.181 652.627 477.115ZM636.068 322.102C614.216 322.402 612.329 354.961 634.908 356.08C657.548 356.99 658.414 322.385 636.068 322.102Z"
        fill="none"
      />
      <path
        d="M534.439 535.452C500.341 550.238 467.582 563.659 435.531 578.598C401.805 594.483 350.942 615.414 356.277 660.989C357.885 676.021 350.364 682.098 333.546 683.075C263.999 682.898 197.372 654.223 136.017 623.816C120.991 614.389 74.0809 589.07 107.144 573.293C141.24 554.521 181.527 562.006 218.419 555.342C234.309 552.683 249.717 546.057 264.793 539.864C290.009 529.507 314.715 517.916 339.774 507.168C404.868 487.152 469.767 530.745 534.439 535.452ZM343.748 590.651C320.766 591.196 321.729 625.041 344.988 624.469C368.986 624.281 367.023 590.12 343.748 590.651ZM350.294 567.166C374.884 566.717 371.88 535.132 348.836 535.119C326.298 535.331 327.938 567.799 350.294 567.166ZM253.486 633.075C276.821 632.987 274.513 600.088 252.255 600.354C230.019 600.803 231.242 633.41 253.486 633.075ZM445.105 547.581C445.715 531.167 417.047 527.544 416.558 545.534C415.487 562.16 444.634 565.22 445.105 547.581Z"
        fill="none"
      />
      <path
        d="M561.359 626.838C532.14 642.749 503.614 659.873 474.711 676.332C466.893 680.733 458.647 683.882 452.17 690.87C442.079 701.757 437.339 715.216 431.828 728.304C405.323 800.074 314.438 783.336 260.469 754.255C322.366 757.867 393.006 752.971 423.31 689.202C430.315 675.683 441.721 666.972 454.134 660.571C480.014 647.226 506.573 635.025 533.569 624.126C541.539 620.908 551.907 623.63 561.176 623.63C561.237 624.699 561.298 625.768 561.359 626.838Z"
        fill="none"
      />
      <path
        d="M613.078 434.779C586.649 435.133 586.486 394.856 612.648 394.516C639.123 394.775 639.638 433.988 613.078 434.779Z"
        fill="inherit"
      />
      <path
        d="M573.501 325.063C599.308 325.771 599.127 364.335 573.17 364.4C548.213 363.85 548.126 324.878 573.501 325.063Z"
        fill="inherit"
      />
      <path
        d="M581.427 443.999C580.808 468.831 544.066 468.403 544.062 443.536C544.578 419.374 581.511 419.828 581.427 443.999Z"
        fill="inherit"
      />
      <path
        d="M652.627 477.115C653.074 501.183 616.464 501.627 615.949 477.793C615.515 453.95 652.274 453.113 652.627 477.115Z"
        fill="inherit"
      />
      <path
        d="M636.074 322.102C658.422 322.388 657.552 356.993 634.912 356.08C612.332 354.958 614.226 322.398 636.074 322.102Z"
        fill="inherit"
      />
      <path
        d="M343.746 590.654C367.022 590.126 368.982 624.287 344.985 624.472C321.726 625.041 320.766 591.196 343.746 590.654Z"
        fill="inherit"
      />
      <path
        d="M350.295 567.168C327.937 567.799 326.3 535.331 348.839 535.121C371.884 535.137 374.883 566.721 350.295 567.168Z"
        fill="inherit"
      />
      <path
        d="M253.487 633.078C231.242 633.411 230.022 600.804 252.258 600.357C274.516 600.094 276.821 632.993 253.487 633.078Z"
        fill="inherit"
      />
      <path
        d="M445.106 547.582C444.633 565.222 415.486 562.159 416.56 545.533C417.05 527.545 445.719 531.17 445.106 547.582Z"
        fill="inherit"
      />
    </svg>
  );
};

export default IconLogo;