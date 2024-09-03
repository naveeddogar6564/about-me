import React from "react"

const page = () => {
    return (
        <div><figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/home...webp" alt="" width="384" height="512"/>
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              Home number 2457 Street number 17 jinnah park Rahim Yar Khan 
              tehsil & district Rahim Yar Khan
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              Naveed Sarwar Dogar
            </div>
            <div className="text-Blue-600 dark:text-Blue-500">
              Student generative Ai course Rahim Yar Khan
            </div>
          </figcaption>
        </div>
      </figure></div>
    )
}

export default page