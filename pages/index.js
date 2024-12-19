import Banner from "@/components/banner";
import Layout from "@/components/layout";
import Animation from "@/components/animation";


export default function Home() {
  return (
    <Layout>
        <section className="content">
          <Animation />
          <Banner />
        </section>
    </Layout>
  );
}