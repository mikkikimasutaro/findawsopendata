/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOpenData = /* GraphQL */ `
  mutation CreateOpenData(
    $input: CreateOpenDataInput!
    $condition: ModelOpenDataConditionInput
  ) {
    createOpenData(input: $input, condition: $condition) {
      id
      Name
      Description
      Documentation
      Contact
      ManagedBy
      UpdateFrequency
      Tags
      License
      Resources
      DataAtWork
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateOpenData = /* GraphQL */ `
  mutation UpdateOpenData(
    $input: UpdateOpenDataInput!
    $condition: ModelOpenDataConditionInput
  ) {
    updateOpenData(input: $input, condition: $condition) {
      id
      Name
      Description
      Documentation
      Contact
      ManagedBy
      UpdateFrequency
      Tags
      License
      Resources
      DataAtWork
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteOpenData = /* GraphQL */ `
  mutation DeleteOpenData(
    $input: DeleteOpenDataInput!
    $condition: ModelOpenDataConditionInput
  ) {
    deleteOpenData(input: $input, condition: $condition) {
      id
      Name
      Description
      Documentation
      Contact
      ManagedBy
      UpdateFrequency
      Tags
      License
      Resources
      DataAtWork
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;

export default createOpenData;