interface Props {
  pxSize?: number;
  className?: string;
}

export default function ComputerIcon({ pxSize, className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      height={pxSize}
      width={pxSize}
      className={className || undefined}
    >
      <path d="M331.37-114.022v-68.13h86v-100H142.152q-27.599 0-47.865-20.336-20.265-20.336-20.265-48.034v-427.087q0-27.697 20.265-48.033 20.266-20.336 47.865-20.336h675.696q27.697 0 48.033 20.336 20.337 20.336 20.337 48.033v427.087q0 27.698-20.337 48.034-20.336 20.336-48.033 20.336H542.63v100h86v68.13H331.37Zm-189.218-236.5h675.696v-427.087H142.152v427.087Zm0 0v-427.087 427.087Z" />
    </svg>
  );
}
