let petNames = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam']
let withSal = petNames
withSal.push("Sal")

console.log(withSal)

console.log(`The third pet is names ${petNames[2]}.`)

console.log(`The array has ${withSal.length} items in it.`)

withSal.pop()
console.log(withSal)