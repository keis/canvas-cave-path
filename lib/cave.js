var length = require('gl-vec2/length')
  , dot = require('gl-vec2/dot')
  , normalize = require('gl-vec2/normalize')

module.exports = cave

function cave(ctx, path) {
  var node = path[0]
    , prev = node
    , pv = [1, 0]
    , step = 10
    , off
    , len
    , v
    , i

  ctx.save()
  ctx.translate(node[0], node[1])

  ctx.beginPath()
  for (i = 1; i < path.length; i++) {
    node = path[i]
    v = [ node[0] - prev[0]
        , node[1] - prev[1] ]
    len = length(v)
    normalize(v, v)
    ctx.rotate(Math.acos(dot(pv, v)))

    for (off = 0; off < len; off += step) {
      switch ((off/step) % 4) {
      case 0:
        ctx.lineTo(off, 0)
        break;
      case 1:
        ctx.lineTo(off, 2)
        break;
      case 2:
        ctx.lineTo(off, -2)
        ctx.stroke()
        ctx.beginPath()
        ctx.lineTo(off - 5, -1)
        break;
      case 3:
        ctx.lineTo(off, 5)
        break;
      }
    }
    ctx.lineTo(len, 0)

    ctx.translate(len, 0)
    prev = node
    pv = v
  }

  ctx.stroke()
  ctx.restore()
}
