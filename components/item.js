import Link from "next/link"
import { FaTag } from "react-icons/fa";

export default function Item({ data }) {
    const id = data.id
    const github = data.properties.Github.url
    const details = data.properties.Description.url
    const title = data.properties.Title.url
    const tags = data.properties.Tags.multi_select
    const date = data.properties.Date.url
    const cover = data.properties.Cover.url

    return (
        <div className="project__item">
            <div className="project__img__container">
                <img src={cover} alt={details} />
            </div>
            <div className="project__tags">
                <ul>
                    {tags.map(tag =>
                        <li key={id + tag.name} style={{ color: `${tag.color}` }}>
                            <span><FaTag />{tag.name}</span>
                        </li>
                    )}
                </ul>
            </div>
            <article className="project__txt">
                    {/* <div className="txt-emphasis text-md"> */}
                    <p className="txt-primary">{date}</p>
                    {/* </div> */}
                    <h1 className="txt-primary font-bold text-3xl md:text-2xl">{title}</h1>
                    <p className="txt-secondary">{details}</p>
                   
            </article>
            <i className="btn-secondary"><a href={github} target="_blank" >Go to github</a></i>
                {/* {tags.map(tag =>
                    <ul key={id + tag.name} 
                    // style={{ backgroundColor: `${tag.color}`}}
                     className="inline-block">
                        <li className="flex flex-wrap flex-row p-6 py-1 mr-2 text-black font-medium items-center" style={{ color: `${tag.color}`}}>
                        <FaTag /> */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4 mr-2">
                            <path fillRule="evenodd" d="M4.5 2A2.5 2.5 0 0 0 2 4.5v2.879a2.5 2.5 0 0 0 .732 1.767l4.5 4.5a2.5 2.5 0 0 0 3.536 0l2.878-2.878a2.5 2.5 0 0 0 0-3.536l-4.5-4.5A2.5 2.5 0 0 0 7.38 2H4.5ZM5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
                        </svg> */}
                {/* {tag.name}</li></ul>)} */}

            </div>
            );
}