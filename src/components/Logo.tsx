export const Logo = ({ className = "h-4 w-4" }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      className={`${className}`}
    >
      <g clip-path="url(#clip0_2_2)">
        <rect width="64" height="64" rx="10" fill="#1E1E1E" />
        <path
          d="M26.72 49L8.288 1H20L31.808 34.216L43.616 1H55.328L36.896 49H26.72Z"
          fill="#8E8E8E"
        />
      </g>
      <rect x="0.5" y="0.5" width="63" height="63" rx="9.5" stroke="#8E8E8E" />
      <defs>
        <clipPath id="clip0_2_2">
          <rect width="64" height="64" rx="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
