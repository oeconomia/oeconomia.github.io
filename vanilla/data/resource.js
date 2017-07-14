function Resource(name) {
    
}

g.resources = {
  ERG: Resource(),
  C: Resource(''), // Oil
  FOOD: Resource(''), // Meat, fish, soy, insects
  H2O: Resource('quality', 'diversity'),
  METAL: Resource('quality', 'diversity'), // Al, Fe
  SI: Resource('quality', 'diversity'),
  SL: Resource('pop'),
}

g.Fab = function(from, to) {
    this.from = from
    this.to = to
}

g.fabs = {
    INSECT_FAB: new g.Fab({ERG: 1, WATER: 1}, {FOOD : 6}),
    CROP_FAB: new g.Fab({ERG: 1, WATER: 1}, {FOOD : 6})
}

g.PopType = function() {
}

g.pops = {
    managers: new g.PopType(),
    engineers: new g.PopType()
}
 