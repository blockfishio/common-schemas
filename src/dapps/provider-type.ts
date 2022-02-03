import { generateValidator, JSONSchema, ValidateFunction } from '../validation'

/**
 * Different supported providers
 * @alpha
 */
export enum ProviderType {
  INJECTED = 'injected',
  // FORTMATIC = 'formatic',
  NETWORK = 'network',
  WALLET_CONNECT = 'wallet_connect',
  FORTMATIC_ETH = "fortmatic-eth",
  FORTMATIC_BSC = "fortmatic-bsc",
}

/**
 * @alpha
 */
export namespace ProviderType {
  export const schema: JSONSchema<ProviderType> = {
    type: 'string',
    enum: Object.values(ProviderType)
  }

  export const validate: ValidateFunction<ProviderType> =
    generateValidator(schema)
}
