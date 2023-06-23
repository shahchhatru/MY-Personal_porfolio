import React from 'react'
import Head from 'next/head'
import AnimatedText from './components/AnimatedText'
import Layout from './components/Layout'
import Image from 'next/image'
import profilepic from '../../public/images/profile/programmingboy.jpg'
import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from './components/skills'
import Experience from './components/Experience'

const AnimatedNumbers = ({value})=>{
  const ref =useRef(null);

  const motionValue =useMotionValue(0);
  const springValue=useSpring(motionValue,{ duration: 3000});
  const isInView = useInView(ref,{once:true});


  useEffect(()=>{
    if(isInView){
      motionValue.set(value);

    }
  },[isInView,value,motionValue])

  useEffect(()=>{
    springValue.on("change",(latest)=>{
     if(ref.current && latest.toFixed(0) <= value){
      ref.current.textContent = latest.toFixed(0);

     }
    })
  },[springValue,value])

  return(
    <span ref={ref}> </span>
  )
}

const about = () => {
  return (
    <>
    <Head>
        <title>Chhatra | About page</title>
        <meta name="description" content="about page description"></meta>
    </Head>
    <main className="flex w-full flex-col items-center justify-center"> 
    <Layout className='pt-16'>
      
        <AnimatedText text="Achieving Milestones That Redefine Development" className='mb-16' />
        <div className='grid w-full grid-cols-8 gap-16'>
            <div className="col-span-3 flex flex-col items-start justify-start">
                <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">Biography</h2>
                <p className="font-medium">
                Welcome to the world of AI and Fullstack Freelancing, where innovation meets creativity! I &apos;m the dynamic freelancer you &apos; ve been searching for, armed with the power of AI and the skills of a fullstack developer. Let &apos; s take your projects to new heights!

                </p>
                <p className="my-4 font-medium">
                Ready to unleash the potential of AI? I &apos; m your go-to expert for mind-blowing content creation and cutting-edge applications. Whether you&apos;re dreaming of intelligent chatbots, futuristic virtual assistants, or data-driven insights that drive success, I &apos; ve got the AI magic to make it happen.
                </p>
                <p className="my-4 font-medium">
                But wait, there &apos; s more! As a fullstack virtuoso, I &apos; ll transform your ideas into pixel-perfect reality. From eye-catching websites that captivate your audience to sleek web applications that streamline your business, I &apos; ve got the coding prowess to create stunning digital experiences.


                </p>
                <p className="font-medium">
                So, if you &apos; re a visionary startup hungry for AI-powered revolution or a business seeking a rockstar freelancer to amplify your online presence, look no further. Let &apos; s team up and embark on an exhilarating journey of innovation and success. Get ready to be amazed—reach out to me today and let &apos; s make waves together!
                </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image src={profilepic} alt="chhatrabikramshah"  className="w-full h-auto rounded-2xl"/>
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                 <AnimatedNumbers value={50} /> +
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">Satisfied clients</h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold"><AnimatedNumbers value={48} />+</span>
                <h2 className="text-xl font-medium capitalize text-dark/75" >projects completed</h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold"><AnimatedNumbers value={4} />+</span>
                <h2 className="text-xl font-medium capitalize text-dark/75">years of experiences</h2>
              </div>
             
            </div>
        </div>

        <Skills/>
        <Experience/>
    </Layout>
    </main>
    </>
  )
}

export default about