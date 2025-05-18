import { WorkExperienceProps } from "@/app/interfaces/work"
import ImageComponent from "../image";
import ExpertArea from "./expertArea";

const WorkExperience = ({ works }: WorkExperienceProps) => {
    return (
        <div className="grid grid-cols-1 gap-4 lg:gap-6">
            <div className="group rounded-2xl bg-white px-6 pt-0 shadow dark:bg-black dark:shadow-dark">
                <h3 className="relative z-10 bg-white pb-2 pt-6 text-2xl font-semibold dark:bg-black dark:text-light">
                    Education
                </h3>
                <div className="max-h-[200px] space-y-4 overflow-hidden pb-6 pt-4 [&::-webkit-scrollbar-thumb]:bg-gray-400 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-0">
                    <div className="animate-scrollY space-y-4 group-hover:[animation-play-state:paused]">
                        {works.map((work, index) => (
                            <div key={`original-${index}`} className="flex flex-col gap-1 md:flex-row md:gap-10">
                                <p className="mt-1 text-sm font-medium text-muted dark:text-light/70">
                                    {work.startDate} - {work.endDate}
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="grid h-8 w-8 shrink-0 place-content-center rounded-lg bg-secondary dark:bg-dark-2">
                                        <ImageComponent src={work.imageCompany} alt={work.company} width={20} height={20} className="h-5 w-5" />
                                    </div>
                                    <div className="">
                                        <h6 className="text-base font-semibold text-dark dark:text-light/70">
                                            {work.company}
                                        </h6>
                                        <p className="text-sm text-muted">
                                            {work.position}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="animate-scrollY space-y-4 group-hover:[animation-play-state:paused]">
                        {works.map((work, index) => (
                            <div key={`original-${index}`} className="flex flex-col gap-1 md:flex-row md:gap-10">
                                <p className="mt-1 text-sm font-medium text-muted dark:text-light/70">
                                    {work.startDate} - {work.endDate}
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="grid h-8 w-8 shrink-0 place-content-center rounded-lg bg-secondary dark:bg-dark-2">
                                        <ImageComponent src={work.imageCompany} alt={work.company} width={20} height={20} className="h-5 w-5" />
                                    </div>
                                    <div className="">
                                        <h6 className="text-base font-semibold text-dark dark:text-light/70">
                                            {work.company}
                                        </h6>
                                        <p className="text-sm text-muted">
                                            {work.position}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
                <h3 className="text-2xl font-semibold dark:text-light">Experience</h3>

                <ExpertArea />
            </div>
        </div>
    )
}

export default WorkExperience;