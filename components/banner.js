import Link from "next/link";

export default function Banner() {
    return (
        <div className="container__banner">
            <h1 className="txt-primary title-font text-5xl font-medium"><span className="hidden lg:inline-block">Hi, I am&nbsp;</span>Pia<span className="lg:hidden inline-block">&nbsp;Lee</span></h1>
            <h2 className="txt-emphasis text-indigo-600 text-xl font-semibold">Frontend Developer</h2>
            <p className="banner__content txt-secondary leading-relaxed text-md">
            I’m constantly learning and experimenting with new tools to improve my skills and make sure that the projects I work on not only meet user needs but exceed their expectations. Whether building from scratch or maintaining and optimizing existing code, I take pride in writing clean, efficient, and maintainable code.</p>
            <section className="cta__project">
                <Link href="projects" className="btn-secondary">Go for Projects</Link>
            </section>
        </div>
    );
}