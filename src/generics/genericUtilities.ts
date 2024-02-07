interface CourseGoal {
    title: string
    description: string
    completeUntil: Date
}

export function createCourse(title:string, description: string, date: Date) {
    // let courseGoal: CourseGoal = {} // Error missing properties of interface CourseGoal
    let courseGoal: Partial<CourseGoal> = {} // With Partial type utility, we can temporary give properties types to courseGoal
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date
    return courseGoal
}

const names: Readonly<string[]> = ['Jhon', 'Anna'] // Using Readonly type, we can lock-down a variable to can not changed

// names.push('Lidya') // Error compiled caused of readonly
// names.pop() // Error compiled caused of readonly