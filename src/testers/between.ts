import { Tester } from '../interfaces/common'

export const betweenTester: Tester = (value, params) => `(${value}>=${JSON.stringify(params[0])}&&${value}<=${JSON.stringify(params[1])})`
