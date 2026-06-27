import Ribbon from "./Ribbon";

export default function GiftBase({ opened }) {
  return (
    <div
      className="
      relative
      h-48
      w-48
      rounded-xl
      bg-[#A47148]
      shadow-2xl
      "
    >
      <Ribbon opened={opened} />
    </div>
  );
}