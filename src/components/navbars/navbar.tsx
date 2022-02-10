import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "../buttons/button";

interface NavbarProps {
  title: string;
}

export const Navbar: React.FC<NavbarProps> = (props) => {
  const router = useRouter();

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-10  md:flex-row md:flex-nowrap md:justify-start flex items-center p-4 bg-gray">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          <a
            className="text-darkBlue text-sm uppercase hidden lg:inline-block font-semibold"
            href="#"
          >
            {props.title}
          </a>
          <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal text-center text-blueGray-300 absolute  rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search" />
              </span>
              <Link href="/">
                <a className=" p-6 md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold  ">
                  salir
                </a>
              </Link>
            </div>
          </form>
        </div>
      </nav>
    </>
  );
};
