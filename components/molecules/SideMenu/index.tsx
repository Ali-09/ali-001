import { LinkItem } from "components";

interface Tag {
  title: string;
  section: string;
}

const SideMenu = () => {
  const tags: Tag[] = [
    { title: "ME", section: "/" },
    { title: "ABOUT", section: "about" },
    { title: "CONTACT", section: "contact" },
  ];

  return (
    <div className="aside">
      {tags.map((tag: Tag, k: number) => (
        <LinkItem tag={tag} key={k} />
      ))}
    </div>
  );
};

export default SideMenu;
