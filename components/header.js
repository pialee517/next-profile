import Link from "next/link";
import ChangeTheme from "./changeTheme";
import svgImg from "../public/bd.svg"
import Image from 'next/image';

export default function Header() {
    return (
        <header>
            <div className="nav">
            {/* <div > */}
            <a href='/' className="container__logo">
                <Image
                    priority
                    src={svgImg}
                    alt="Logo"
                    height={26}
                    width={26} />
                <span>Pia</span>
            </a>
            {/* </div> */}
            <div className="menu">
                <Link href="/" className="txt-link">Home</Link>
                <Link href='/projects' className="txt-link">Projects</Link>
                <ChangeTheme />
            </div>
            </div>
        </header>
    );
}