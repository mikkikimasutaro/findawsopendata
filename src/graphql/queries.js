/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOpenData = /* GraphQL */ `
  query GetOpenData($id: ID!) {
    getOpenData(id: $id) {
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
export const listOpenData = /* GraphQL */ `
  query ListOpenData(
    $filter: ModelOpenDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOpenData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncOpenData = /* GraphQL */ `
  query SyncOpenData(
    $filter: ModelOpenDataFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOpenData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export default listOpenData;