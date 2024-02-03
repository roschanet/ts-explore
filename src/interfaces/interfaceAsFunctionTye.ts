// type AddFn = (x: number, y: number) => number

interface AddFn {
  // interface as function type
  (x: number, y: number): number
}

export let add: AddFn

add = (x, y) => {
  return x + y
}
