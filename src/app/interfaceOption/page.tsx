import InterfaceOptional from "@/interfaces/interfaceOptional"

export default function InterfaceOption() {
    const sales = new InterfaceOptional('Lucky', 40)
    sales.printUser()

    return (
        <><h1>Interface Optional Page</h1></>
    )
}