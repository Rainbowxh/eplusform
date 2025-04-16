import { generateId } from '@/shared'
import { transferObjectToString } from '@/shared'

enum PointEnum {
  lt = 'lt',
  ct = 'ct',
  rt = 'rt',
  lc = 'lc',
  rc = 'rc',
  lb = 'lb',
  cb = 'cb',
  rb = 'rb',
}

class Point {
  id: string
  type: PointEnum
  vector: [number, number]

  constructor(type: PointEnum, vector: [number, number]) {
    this.id = generateId(Point.name)
    this.type = type
    this.vector = vector
  }

  getStyle() {
    const [x, y] = this.vector
    const style = {
      width: '10px',
      height: '10px',
      backgroundColor: 'red',
      borderRadius: '50%',
      top: `${y * 100}%`,
      left: `${x * 100}%`,
      transform: 'translate(-50%, -50%)',
    }
    return transferObjectToString(style)
  }

  move() {}
}

export const points: Point[] = getPoints()

function getPoints(): Point[] {
  const lt = new Point(PointEnum.lt, [0, 0])
  const ct = new Point(PointEnum.ct, [0.5, 0])
  const rt = new Point(PointEnum.rt, [1, 0])
  const lc = new Point(PointEnum.lc, [0, 0.5])
  const rc = new Point(PointEnum.rc, [1, 0.5])

  const lb = new Point(PointEnum.lb, [0, 1])
  const cb = new Point(PointEnum.cb, [0.5, 1])
  const rb = new Point(PointEnum.rb, [1, 1])
  return [lt, ct, rt, lc, rc, lb, cb, rb]
}
