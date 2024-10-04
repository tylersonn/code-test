interface Props {
  isBackground?: boolean;
}

export default function BackDrop({ isBackground = true }: Props) {
  return (
    <div className={`fixed top-0 left-0 w-screen h-screen z-[2010] backdrop-blur-[4px] ${isBackground ? "bg-[rgba(0,0,0,0.5)]" : ""}`} />
  );
}

BackDrop.defaultProps = {
  isBackground: true,
};
