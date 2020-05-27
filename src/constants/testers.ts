import { afterTester } from '../testers/after'
import { alphaTester } from '../testers/alpha'
import { alphanumTester } from '../testers/alphanum'
import { alwaysFalseTester } from '../testers/always-false'
import { alwaysTrueTester } from '../testers/always-true'
import { anyTester } from '../testers/any'
import { asciiTester } from '../testers/ascii'
import { base64Tester } from '../testers/base64'
import { beforeTester } from '../testers/before'
import { betweenTester } from '../testers/between'
import { booleanTester } from '../testers/boolean'
import { creditcardTester } from '../testers/creditcard'
import { dateTester } from '../testers/date'
import { emailTester } from '../testers/email'
import { falseTester } from '../testers/false'
import { finiteTester } from '../testers/finite'
import { hexcolorTester } from '../testers/hexcolor'
import { inTester } from '../testers/in'
import { intTester } from '../testers/int'
import { ipTester } from '../testers/ip'
import { jsonTester } from '../testers/json'
import { jwtTester } from '../testers/jwt'
import { lengthBetweenTester } from '../testers/length-between'
import { lengthMaxTester } from '../testers/length-max'
import { lengthMinTester } from '../testers/length-min'
import { lengthTester } from '../testers/length'
import { lowercaseTester } from '../testers/lowercase'
import { macaddressTester } from '../testers/macaddress'
import { maxTester } from '../testers/max'
import { minTester } from '../testers/min'
import { nanTester } from '../testers/nan'
import { nullTester } from '../testers/null'
import { numberTester } from '../testers/number'
import { objectTester } from '../testers/object'
import { portTester } from '../testers/port'
import { regexpTester } from '../testers/regexp'
import { stringTester } from '../testers/string'
import { symbolTester } from '../testers/symbol'
import { trueTester } from '../testers/true'
import { uppercaseTester } from '../testers/uppercase'
import { urlTester } from '../testers/url'
import { uuidTester } from '../testers/uuid'


export const testers = {
  after: afterTester,
  alpha: alphaTester,
  alphanum: alphanumTester,
  always_false: alwaysFalseTester,
  always_true: alwaysTrueTester,
  any: anyTester,
  ascii: asciiTester,

  base64: base64Tester,
  before: beforeTester,
  between: betweenTester,
  boolean: booleanTester,
  bool: booleanTester,

  creditcard: creditcardTester,

  date: dateTester,
  // datetime ?
  // domain

  email: emailTester,

  false: falseTester,
  finite: finiteTester,
  float: numberTester,

  // hash
  hexcolor: hexcolorTester,

  in: inTester,
  int: intTester,
  integer: intTester,
  ip: ipTester,

  json: jsonTester,
  jwt: jwtTester,

  lowercase: lowercaseTester,

  length: lengthTester,
  length_between: lengthBetweenTester,
  length_max: lengthMaxTester,
  length_min: lengthMinTester,

  macaddress: macaddressTester,
  max: maxTester,
  // microtimestamp
  min: minTester,

  nan: nanTester,
  null: nullTester,
  number: numberTester,

  object: objectTester,

  port: portTester,

  re: regexpTester,
  regex: regexpTester,
  regexp: regexpTester,

  string: stringTester,
  symbol: symbolTester,

  true: trueTester,
  // timestamp
  // timezone

  uppercase: uppercaseTester,
  url: urlTester,
  uuid: uuidTester,
}
