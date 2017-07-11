function Resource(name) {
    
}

economy.resources = {
  ERG: Resource(),
  C: Resource(''), // Oil
  FOOD: Resource(''), // Meat, fish, soy, insects
  H2O: Resource('quality', 'diversity'),
  METAL: Resource('quality', 'diversity'), // Al, Fe
  SI: Resource('quality', 'diversity'),
  SL: Resource('pop'),
}

economy.plants = {
    INSECT_PLANT: Plant({ERG: 1, WATER: 1}, {FOOD : 6}),
    CROP_PLANT: Plant({ERG: 1, WATER: 1}, {FOOD : 6}),
    
}

economy.pops = {
    craftsman: PopType(),
    
}