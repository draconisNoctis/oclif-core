export const STANDARD_ANSI = [
  'white',
  'black',
  'blue',
  'yellow',
  'green',
  'red',
  'magenta',
  'cyan',
  'gray',
  'blackBright',
  'redBright',
  'greenBright',
  'yellowBright',
  'blueBright',
  'magentaBright',
  'cyanBright',
  'whiteBright',
  'bgBlack',
  'bgRed',
  'bgGreen',
  'bgYellow',
  'bgBlue',
  'bgMagenta',
  'bgCyan',
  'bgWhite',
  'bgGray',
  'bgBlackBright',
  'bgRedBright',
  'bgGreenBright',
  'bgYellowBright',
  'bgBlueBright',
  'bgMagentaBright',
  'bgCyanBright',
  'bgWhiteBright',
  'bold',
  'underline',
  'dim',
  'italic',
  'strikethrough',
] as const

export type StandardAnsi = (typeof STANDARD_ANSI)[number]

export type JsonTheme = {
  brace?: string | StandardAnsi
  bracket?: string | StandardAnsi
  colon?: string | StandardAnsi
  comma?: string | StandardAnsi
  key?: string | StandardAnsi
  string?: string | StandardAnsi
  number?: string | StandardAnsi
  boolean?: string | StandardAnsi
  null?: string | StandardAnsi
}

export type Theme = {
  [key: string]: string | StandardAnsi | Theme | undefined
  alias?: string | StandardAnsi
  bin?: string | StandardAnsi
  command?: string | StandardAnsi
  commandSummary?: string | StandardAnsi
  dollarSign?: string | StandardAnsi
  flag?: string | StandardAnsi
  flagDefaultValue?: string | StandardAnsi
  flagOptions?: string | StandardAnsi
  flagRequired?: string | StandardAnsi
  flagSeparator?: string | StandardAnsi
  json?: JsonTheme
  sectionDescription?: string | StandardAnsi
  sectionHeader?: string | StandardAnsi
  spinner?: string | StandardAnsi
  topic?: string | StandardAnsi
  version?: string | StandardAnsi
}
