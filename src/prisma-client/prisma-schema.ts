export const typeDefs = /* GraphQL */ `type AggregateLocker {
  count: Int!
}

type AggregateLockerCluster {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Locker {
  id: ID!
  cluster: LockerCluster
  busy: Boolean!
  locked: Boolean!
  open: Boolean!
}

type LockerCluster {
  id: ID!
  lockers(where: LockerWhereInput, orderBy: LockerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Locker!]
}

type LockerClusterConnection {
  pageInfo: PageInfo!
  edges: [LockerClusterEdge]!
  aggregate: AggregateLockerCluster!
}

input LockerClusterCreateInput {
  lockers: LockerCreateManyWithoutClusterInput
}

input LockerClusterCreateOneWithoutLockersInput {
  connect: LockerClusterWhereUniqueInput
}

type LockerClusterEdge {
  node: LockerCluster!
  cursor: String!
}

enum LockerClusterOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LockerClusterPreviousValues {
  id: ID!
}

type LockerClusterSubscriptionPayload {
  mutation: MutationType!
  node: LockerCluster
  updatedFields: [String!]
  previousValues: LockerClusterPreviousValues
}

input LockerClusterSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LockerClusterWhereInput
  AND: [LockerClusterSubscriptionWhereInput!]
  OR: [LockerClusterSubscriptionWhereInput!]
  NOT: [LockerClusterSubscriptionWhereInput!]
}

input LockerClusterUpdateInput {
  lockers: LockerUpdateManyWithoutClusterInput
}

input LockerClusterUpdateOneWithoutLockersInput {
  delete: Boolean
  disconnect: Boolean
  connect: LockerClusterWhereUniqueInput
}

input LockerClusterWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  lockers_every: LockerWhereInput
  lockers_some: LockerWhereInput
  lockers_none: LockerWhereInput
  AND: [LockerClusterWhereInput!]
  OR: [LockerClusterWhereInput!]
  NOT: [LockerClusterWhereInput!]
}

input LockerClusterWhereUniqueInput {
  id: ID
}

type LockerConnection {
  pageInfo: PageInfo!
  edges: [LockerEdge]!
  aggregate: AggregateLocker!
}

input LockerCreateInput {
  cluster: LockerClusterCreateOneWithoutLockersInput
  busy: Boolean
  locked: Boolean
  open: Boolean
}

input LockerCreateManyWithoutClusterInput {
  create: [LockerCreateWithoutClusterInput!]
  connect: [LockerWhereUniqueInput!]
}

input LockerCreateWithoutClusterInput {
  busy: Boolean
  locked: Boolean
  open: Boolean
}

type LockerEdge {
  node: Locker!
  cursor: String!
}

enum LockerOrderByInput {
  id_ASC
  id_DESC
  busy_ASC
  busy_DESC
  locked_ASC
  locked_DESC
  open_ASC
  open_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LockerPreviousValues {
  id: ID!
  busy: Boolean!
  locked: Boolean!
  open: Boolean!
}

type LockerSubscriptionPayload {
  mutation: MutationType!
  node: Locker
  updatedFields: [String!]
  previousValues: LockerPreviousValues
}

input LockerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LockerWhereInput
  AND: [LockerSubscriptionWhereInput!]
  OR: [LockerSubscriptionWhereInput!]
  NOT: [LockerSubscriptionWhereInput!]
}

input LockerUpdateInput {
  cluster: LockerClusterUpdateOneWithoutLockersInput
  busy: Boolean
  locked: Boolean
  open: Boolean
}

input LockerUpdateManyWithoutClusterInput {
  create: [LockerCreateWithoutClusterInput!]
  delete: [LockerWhereUniqueInput!]
  connect: [LockerWhereUniqueInput!]
  disconnect: [LockerWhereUniqueInput!]
  update: [LockerUpdateWithWhereUniqueWithoutClusterInput!]
  upsert: [LockerUpsertWithWhereUniqueWithoutClusterInput!]
}

input LockerUpdateWithoutClusterDataInput {
  busy: Boolean
  locked: Boolean
  open: Boolean
}

input LockerUpdateWithWhereUniqueWithoutClusterInput {
  where: LockerWhereUniqueInput!
  data: LockerUpdateWithoutClusterDataInput!
}

input LockerUpsertWithWhereUniqueWithoutClusterInput {
  where: LockerWhereUniqueInput!
  update: LockerUpdateWithoutClusterDataInput!
  create: LockerCreateWithoutClusterInput!
}

input LockerWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  cluster: LockerClusterWhereInput
  busy: Boolean
  busy_not: Boolean
  locked: Boolean
  locked_not: Boolean
  open: Boolean
  open_not: Boolean
  AND: [LockerWhereInput!]
  OR: [LockerWhereInput!]
  NOT: [LockerWhereInput!]
}

input LockerWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createLockerCluster(data: LockerClusterCreateInput!): LockerCluster!
  updateLockerCluster(data: LockerClusterUpdateInput!, where: LockerClusterWhereUniqueInput!): LockerCluster
  updateManyLockerClusters(data: LockerClusterUpdateInput!, where: LockerClusterWhereInput): BatchPayload!
  upsertLockerCluster(where: LockerClusterWhereUniqueInput!, create: LockerClusterCreateInput!, update: LockerClusterUpdateInput!): LockerCluster!
  deleteLockerCluster(where: LockerClusterWhereUniqueInput!): LockerCluster
  deleteManyLockerClusters(where: LockerClusterWhereInput): BatchPayload!
  createLocker(data: LockerCreateInput!): Locker!
  updateLocker(data: LockerUpdateInput!, where: LockerWhereUniqueInput!): Locker
  updateManyLockers(data: LockerUpdateInput!, where: LockerWhereInput): BatchPayload!
  upsertLocker(where: LockerWhereUniqueInput!, create: LockerCreateInput!, update: LockerUpdateInput!): Locker!
  deleteLocker(where: LockerWhereUniqueInput!): Locker
  deleteManyLockers(where: LockerWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  lockerCluster(where: LockerClusterWhereUniqueInput!): LockerCluster
  lockerClusters(where: LockerClusterWhereInput, orderBy: LockerClusterOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LockerCluster]!
  lockerClustersConnection(where: LockerClusterWhereInput, orderBy: LockerClusterOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LockerClusterConnection!
  locker(where: LockerWhereUniqueInput!): Locker
  lockers(where: LockerWhereInput, orderBy: LockerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Locker]!
  lockersConnection(where: LockerWhereInput, orderBy: LockerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LockerConnection!
  node(id: ID!): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  lockerCluster(where: LockerClusterSubscriptionWhereInput): LockerClusterSubscriptionPayload
  locker(where: LockerSubscriptionWhereInput): LockerSubscriptionPayload
}

type User {
  id: ID!
  name: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`