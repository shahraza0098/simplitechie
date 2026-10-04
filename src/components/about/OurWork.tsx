"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function OurWork() {
  const projects = [
    {
      title: "Apna Gym",
      desc: "Gym management SaaS for memberships, attendance, payments, staff, analytics, and business operations.",
      darkImg: "/projects/gym-dark.webp",
      lightImg: "/projects/gym-light.webp"
    },
    {
      title: "GyanMaster",
      desc: "Digital learning platform for courses, video learning, subscriptions, and student experiences.",
      darkImg: "/projects/gyan-dark.webp",
      lightImg: "/projects/gyan-light.webp"
    },
    {
      title: "Salon Booking Platform",
      desc: "Booking and business management platform for salons with real-time scheduling.",
      darkImg: "/projects/salon-dark.webp",
      lightImg: "/projects/salon-light.webp"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-background-alt px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex flex-col items-center text-center"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4 block">
            Our Experience
          </span>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground">
            Built for the real world.
          </h2>
          <p className="text-lg text-foreground/70 mt-6 max-w-2xl font-light">
            We have experience building practical, high-performance products across different industries that drive real business results.
          </p>
        </motion.div>

        <div className="flex flex-col gap-12 md:gap-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}>
                
                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="w-full lg:w-[40%] flex flex-col gap-4"
                >
                  <h3 className="text-3xl md:text-4xl font-medium text-foreground tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-lg text-foreground/70 font-light leading-relaxed">
                    {project.desc}
                  </p>
                </motion.div>

                {/* Visual */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-[60%] aspect-[16/10] md:aspect-[16/9] relative rounded-3xl overflow-hidden bg-background border border-border/50 shadow-2xl group"
                >
                  {/* Dark Mode Image */}
                  <Image 
                    src={project.darkImg} 
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-contain object-center hidden dark:block p-2 md:p-4 lg:p-6 transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  {/* Light Mode Image */}
                  <Image 
                    src={project.lightImg} 
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-contain object-center block dark:hidden p-2 md:p-4 lg:p-6 transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </motion.div>
                
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
