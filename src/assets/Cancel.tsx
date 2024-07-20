import { useSharedBarState } from "../context/SharedBarState";
const Cancel = function () {
  const { turnOffBar } = useSharedBarState();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-8 absolute right-0 mr-3"
      onClick={turnOffBar}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
};

export default Cancel;
