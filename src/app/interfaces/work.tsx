// interfaces.ts
export interface InterfaceWorkExperience {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    imageCompany: string;
}

export interface WorkExperienceProps {
    works: InterfaceWorkExperience[];
}
