import Link from "next/link";

const NavigationBar = () => {
  const links = [
    {
      name: "About",
      url: "/about",
    },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <div>
      <ul className="flex gap-4 justify-end">
        {links &&
          links.map((link) => (
            <li key={link.name}>
              <Link href={link.url}>{link.name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default NavigationBar;
