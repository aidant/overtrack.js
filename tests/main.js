const ot = require('../src')

// // latest client version
// ot.clientVersion()
//   .then(console.log)
//   .catch(console.error)
//
// // simple endpoint for getting current sr
// ot.sr('ottr')
//   .then(sr => console.log('Current Skill Rating:', sr))
//   .catch(console.error)
//
// main endpoint
// ot.player('ane')
//   .then((games) => games[0])
//   .then((game) => console.log(require('util').inspect(game, { depth: null })))
//   .catch(console.error)

ot.lastMatch('ottr', true)
  .then(game => {
    console.log(game)
    return game.detailed()
  })
  .then(game => console.log(game))
  .catch(console.error)
