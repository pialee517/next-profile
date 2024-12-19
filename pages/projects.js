import Layout from "@/components/layout";
import { DATABAS_ID, TOKEN, TEST } from "@/components/config";
import { Client } from "@notionhq/client";
import { useState } from "react";
import Item from "@/components/item";



export default function Projects({ data }) {
    return (
        <Layout>
            <section className="project__container">
                {data.map( project =>
                    <Item key={project.id} data={project}/>)
                }
            </section>
        </Layout>
    );
}
export async function getStaticProps() {
    const notion = new Client({ auth: TOKEN });
    const databaseId = DATABAS_ID;
    const response = await notion.databases.query({
        database_id: databaseId,
            headers: {
            method: 'POST',
            accept: 'application/json',
            'Notion-Version': '2022-06-28',
            'content-type': 'application/json',
            'authorization': `Bearer ${TOKEN}`
            },
            body: JSON.stringify({page_size: 100})
        
    });
    const data = response.results;
    console.log({data})
    return { props: { data } }
}