import { version } from '../package.json'

// ?? 🤔 ?? --> https://en.freesewing.dev/packages/core/config

export default {
  name: 'wbeanie',
  version,
  design: 'bitbangr',
  code: 'bitbangr',
  department: 'accessories',
  type: 'pattern',
  difficulty: 3,
  tags: [
    'freesewing',
    'design',
    'diy',
    'fashion',
    'made to measure',
    'parametric design',
    'pattern',
    'sewing',
    'sewing pattern'
  ],
  optionGroups: {
    fit: ['size']
  },
  measurements: ["head"],
  dependencies: {},
  inject: {},
  hide: [],
  parts: ['beanie'],
  options: {
    size: { pct: 50, min: 10, max: 100 }
  }
}
