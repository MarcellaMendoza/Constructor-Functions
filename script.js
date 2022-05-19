const hotel1 = {
    name: "Disney Galactic Starcruiser",
    rooms: 100,
    stars: "⭐⭐⭐⭐",
    costPerNight: 10000
}

const hotel2 = {
    name: "Mos Eisley Superdeeelux",
    rooms: 22,
    stars: "⭐",
    costPerNight: 59
}

function NewRepublicHolidayHotels(data) {
  this.name = data.name
  this.rooms = data.rooms
  this.stars = data.stars
  this.costPerNight = data.costPerNight
}

const disneyGalStar = new NewRepublicHolidayHotels(hotel1)
const mosEisley = new NewRepublicHolidayHotels(hotel2)

console.log(disneyGalStar)
console.log(mosEisley)