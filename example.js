var cave = require('./lib/cave')
  , canvas = document.getElementById('my-canvas')
  , ctx = canvas.getContext('2d')

ctx.clearRect(0, 0, canvas.width, canvas.height)
ctx.translate(200, 200)

ctx.lineWidth = 2
ctx.strokeStyle = 'red'

cave(ctx, [ [0, 0]
          , [200, 0]
          , [250, 100]
          , [250, 200]
          ])
