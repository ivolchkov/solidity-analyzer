import * as parser from '@solidity-parser/parser'
import {AnalyzeResponse} from '../models/AnalyzeResponse'
import {
  ContractDefinition,
  ImportDirective,
} from '@solidity-parser/parser/dist/src/ast-types'

export const processMessage = async (input: string): Promise<AnalyzeResponse> => {
  const response: AnalyzeResponse = {
    imports: [],
    contracts: [],
  }
  const parsedInput = parser.parse(input)
  parser.visit(parsedInput, {
    ImportDirective: (node: ImportDirective) => {
      response.imports.push(node.path)
    },
    ContractDefinition: (node: ContractDefinition) => {
      response.contracts.push(node.name)
    },
  })
  return response
}
