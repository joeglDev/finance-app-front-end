import Link from "next/link";

/*
Annoyingly this NAvBAr will need to be present in each page.
Could be splved by disabling default page routing and creating a custom router to render pages in below this component of a main page.
*/
export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
};
