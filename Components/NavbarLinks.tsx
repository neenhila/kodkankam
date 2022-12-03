type linkData = {
  text: string;
};

export default function NavbarLinks({ text }: linkData) {
  return (
    <li
      className="hover:text-red-500 cursor-pointer active:text-black select-none font-normal"
    >
      {text}
    </li>
  );
}
