import { DuckRuntime } from 'saga-duck'
import RootDuck from './RootDuck'

const rootDuck = new RootDuck()
const duckRuntime = new DuckRuntime(rootDuck)

