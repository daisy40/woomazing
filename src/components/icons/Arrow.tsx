interface ArrowProps {
  direction?: string;
  color?: string;
}

const Arrow = ({ direction = "right", color = "white" }: ArrowProps) => {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`arrow ${direction}`}
    >
      <path
        d="M0 12H31M31 12L20.186 1M31 12L20.186 23"
        stroke={color}
      />
    </svg>
  );
};

export default Arrow;