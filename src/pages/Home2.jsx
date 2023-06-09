import { useContext } from 'react'
import { DarkModeContext } from './../context/DarkModeContext'
import { ReactComponent as LinkedinIcon } from './../assets/logos/technologies/linkedin.svg'
import { ReactComponent as BlobAnimation } from './../assets/blob/blobanimation.svg'
import { ReactComponent as BlobAnimationDark } from './../assets/blob/blobanimation-dark.svg'
import Contact from './About/Contact'
import Description from './About/Description'
import ResumeContactBtn from './About/Buttons/Resume'
import About from './About'

export default function Home2() {


    const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
    return (
        <section id='home' className='flex flex-col items-center' >
            <div className='pt-64 flex flex-col justify-center items-center gap-8 md:gap-16'>
                <h2 className="font-bold text-center leading-[8vw] xs:leading-[4.5vw] xl:leading-[4vw] text-[10vw] xs:text-[5.4vw] xl:text-[5vw] bg-gradient-to-r bg-clip-text from-teal-400 to-teal-600 dark:from-sky-500 dark:to-blue-500 animate-[easeIn_0.6s_ease-in-out_0.3s_both,slideFromTop_0.5s_ease-in-out_0.3s_both]">
                    Hello,
                    <br />
                    I <strong className="text-transparent"><span className="">automate</span><span className="hidden">develop</span></strong>
                    <br />
                    things with
                    <br />
                    programming.
                </h2>
                <ResumeContactBtn />
                <Contact />
            </div>
            <About />
        </section >

    )
}