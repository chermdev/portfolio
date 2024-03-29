import { ReactComponent as LinkedinIcon } from '/src/assets/logos/technologies/linkedin.svg'

export default function LinkedinContactBtn() {
    return (
        <div className='hover:animate-[wiggle_0.5s_ease-in-out_infinite] '>
            <a href="https://www.linkedin.com/in/emmanuelhdz"
                target="_blank"
                alt="linkedin"
                className="relative
                inline-flex
                items-center
                justify-center
                text-2xl
                font-bold
                rounded-2xl
                animate-[easeIn_0.6s_ease-in-out_0.7s_both]
                group
                px-6
                py-1
                shadow-md hover:shadow-black/30 hover:shadow-lg
                bg-gradient-to-b
                outline outline-2 outline-offset-0
                backdrop-blur-sm hover:outline-0
                
                text-teal-500 outline-white/40
                from-white/10 to-white/20 
                
                dark:text-sky-400 dark:outline-white/10
                dark:from-black/10 dark:to-black/20

                hover:text-white 
                hover:bg-opacity-100 
                hover:bg-[#00a4fc]

                dark:hover:text-white
                dark:hover:bg-opacity-100
                dark:hover:bg-[#00a4fc]
                ">

                <LinkedinIcon className="fill-current w-[2.5rem] h-[2.5rem]" />
                <span className="
                group-hover:opacity-100
                opacity-0
                group-hover:visible
                invisible
                bg-black/70
                rounded-2xl
                bottom-[115%]
                absolute
                text-center
                transition-opacity
                font-medium
                tracking-wider
                text-sm
                text-gray-100
                p-2
                ">Go to Linkedin!</span>
            </a>
        </div>
    )
}