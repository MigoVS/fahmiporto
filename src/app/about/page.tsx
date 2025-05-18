import { Metadata } from "next";

export const metadata: Metadata = {
    title: `${process.env.NEXT_PUBLIC_APP_NAME || "My Site"} | About`,
    description: "My Portfolio",
};
export default function HAboutome() {
    return (
        <h1 className="dark:text-white">About</h1>
    );
}
