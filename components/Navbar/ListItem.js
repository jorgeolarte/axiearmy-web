export default function ListItem({ type, children }) {
  return (
    <li
      className={`w-full md:w-auto ${
        type === "button" ? "my-2" : "border-b-2 md:border-0"
      } py-2 border-gray text-center md:text-left`}
    >
      {children}
    </li>
  );
}
