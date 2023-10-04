import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Layout from "./components/Layout";
import AnimatedText from "./components/AnimatedText";
import { GithubIcon } from "./components/Icons";
import project_mis from "../../public/images/projects/MIS.jpg";
import project_vcg from '../../public/images/projects/VideoCaptionining.jpg';
import project_ecommerce from '../../public/images/projects/ecommerce.jpg';

const FeaturedProject = ({ type, title, summary, img, link="", github="" }) => {
  return (
    <article className="w-full h-fit flex items-center justify-between rounded-3xl border border-solid border-dark  bg-light shadow-2xl p-12">
      <Link href={link} target="_blank"
      className="w-1/2 cursor-pointer overflow-hidden rounded-lg">
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link href={link} target="_blank">
          <h2 className="my-2 w-full text-left text-4xl font-bold hover:underline underline-offset-2">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>

        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-12 m-2">
            <GithubIcon />
          </Link>
         
          <Link href={link} target="_blank"
          className="ml-6 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
          >
            Visit Project
          </Link>
        </div>

        
      </div>
    </article>
  );
};

export default function projects() {
  return (
    <>
      <Head>
        <title>Chhatra Bikram shah | projects page</title>
        <meta name="description" contents="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col  items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text=" Imagination Trumps knowledge" 
            className="mb-16"
          />
          <div className="grid  grid-cols-12 gap-24">
            <div className="col-span-12">
              <FeaturedProject
                title="Frontend for MIS for DoECE"
                summary={
                  "A feature rich UI for our MIS sytem of Department of Electronics and Computer Engineering,Note: The project is still in progress and this is just UI which is uploaded to github not the full funcitioning app"
                }
                link={"https://management-information-system-mis.vercel.app/"}
                type="UI Demo Frontend React.js "
                github={
                  "https://github.com/shahchhatru/Management_Information_System_MIS"
                }
                img={project_mis}
              />
            </div>
            {/* <div className="col-span-6">Project-1</div>
            <div className="col-span-6">Project-2</div> */}
            <div className="col-span-12">
            <FeaturedProject
                title="Video Event Describer"
                summary={
                  "A powerful AI model which synthesizes Video frame by frame and generate description of what is happening in video. It was built without using any pretrained model from scratch. It was coded in pytorch" }
                link={"https://github.com/shahchhatru/Video-Caption-Generator"}
                type="AI | Image Processing , Deep Learning"
                github={
                  "https://github.com/shahchhatru/Video-Caption-Generator"
                }
                img={project_vcg}
              />
            </div>
            {/* <div className="col-span-6"></div>
            <div className="col-span-6"></div> */}
            <div className="col-span-12">
            <FeaturedProject
                title="Plant Nursery Website"
                summary={
                  "A full stack website build using django which serves as a ecommerce platform for people and nurseries to buy plants,sell seeds and fertilizers" }
                link={"https://github.com/shahchhatru/django-nursery-ecommerece2.0"}
                type="Django Full Stack"
                github={
                  "https://github.com/shahchhatru/django-nursery-ecommerece2.0"
                }
                img={project_ecommerce}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
