import { createContext } from "react"

interface WordContextType {
  [key: string]: number
}

export const RefContext = createContext({})
export const WordContext = createContext<WordContextType>({})
export const TranslateList = createContext<WordContextType>({})
