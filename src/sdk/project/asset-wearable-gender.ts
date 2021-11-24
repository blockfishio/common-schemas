import { WearableGender } from "../../dapps/wearable-gender";
import {
  generateValidator,
  JSONSchema,
  ValidateFunction,
} from "../../validation";

export enum AssetWearableGender {
  MALE = 'male',
  FEMALE = 'female',
  BOTH = 'both',
}

// export enum AssetWearableGenderBoth {
//   BOTH = "both",
// }

// export type AssetWearableGender = AssetWearableGenderBoth | WearableGender

export namespace AssetWearableGender {
  export const schema: JSONSchema<AssetWearableGender> = {
    type: 'string',
    enum: Object.values(AssetWearableGender),
  };

  export const validate: ValidateFunction<AssetWearableGender> =
    generateValidator(schema);
}
