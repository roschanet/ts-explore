export default function Primitives() {
  const title = 'Primitive Type Page: string, number, and boolean'
  const num1 = 5
  const num2 = 8
  const addNumber = (n1: number, n2: number) => {
    return n1 + n2
  }

  const numberCheck = (n1: number, n2: number) => {
    if (n1 > n2) {
      return `${n1} is greater than ${n2}`
    } else {
      return `${n1} is least than ${n2}`
    }
  }

  const result = addNumber(num1, num2)
  const answer = numberCheck(num1, num2)
  return (
    <>
      <h1>{title}</h1>
      <p>{`Result of ${num1} + ${num2} is: ${result}`}</p>
      <p>{answer}</p>
    </>
  )
}
