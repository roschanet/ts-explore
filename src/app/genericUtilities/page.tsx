import { createCourse } from "@/generics/genericUtilities"

export default function GenericUtilitiesPage() {
    const courseGoal = createCourse('Learning Typescript', 'All about typescript', new Date)
console.log(courseGoal);


    return (
        <>
        <h1>Generic Utilities Page</h1>
        </>
    )
}