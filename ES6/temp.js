let User = {Session : "ES6", Topic : "Destructuring", Timing : {FirstSlot : "9AM", SecondSlot : "10AM" } }

console.log(User.Topic)
console.log(User.Timing.SecondSlot)

let { Topic, Timing = { SecondSlot, ThirdSlot : "11AM" } } = User

console.log(Topic)
console.log(Timing.SecondSlot)
console.log(Timing.ThirdSlot)