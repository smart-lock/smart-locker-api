export const typeDefs = /* GraphQL */ `type AggregateLocker {
  count: Int!
}

type AggregateLockerCluster {
  count: Int!
}

type AggregateLockerSession {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Locker {
  id: ID!
  idInCluster: String!
  cluster: LockerCluster
  busy: Boolean!
  locked: Boolean!
  open: Boolean!
  closed: Boolean
  alarm: Boolean
  sensorPin: Int!
  alarmPin: Int!
  lockPin: Int!
  currentOwner: User
  sessions(where: LockerSessionWhereInput, orderBy: LockerSessionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LockerSession!]
}

type LockerCluster {
  id: ID!
  lockers(where: LockerWhereInput, orderBy: LockerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Locker!]
  macAddress: String!
}

type LockerClusterConnection {
  pageInfo: PageInfo!
  edges: [LockerClusterEdge]!
  aggregate: AggregateLockerCluster!
}

input LockerClusterCreateInput {
  lockers: LockerCreateManyWithoutClusterInput
  macAddress: String
}

input LockerClusterCreateOneWithoutLockersInput {
  create: LockerClusterCreateWithoutLockersInput
  connect: LockerClusterWhereUniqueInput
}

input LockerClusterCreateWithoutLockersInput {
  macAddress: String
}

type LockerClusterEdge {
  node: LockerCluster!
  cursor: String!
}

enum LockerClusterOrderByInput {
  id_ASC
  id_DESC
  macAddress_ASC
  macAddress_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LockerClusterPreviousValues {
  id: ID!
  macAddress: String!
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
  macAddress: String
}

input LockerClusterUpdateOneWithoutLockersInput {
  create: LockerClusterCreateWithoutLockersInput
  update: LockerClusterUpdateWithoutLockersDataInput
  upsert: LockerClusterUpsertWithoutLockersInput
  delete: Boolean
  disconnect: Boolean
  connect: LockerClusterWhereUniqueInput
}

input LockerClusterUpdateWithoutLockersDataInput {
  macAddress: String
}

input LockerClusterUpsertWithoutLockersInput {
  update: LockerClusterUpdateWithoutLockersDataInput!
  create: LockerClusterCreateWithoutLockersInput!
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
  macAddress: String
  macAddress_not: String
  macAddress_in: [String!]
  macAddress_not_in: [String!]
  macAddress_lt: String
  macAddress_lte: String
  macAddress_gt: String
  macAddress_gte: String
  macAddress_contains: String
  macAddress_not_contains: String
  macAddress_starts_with: String
  macAddress_not_starts_with: String
  macAddress_ends_with: String
  macAddress_not_ends_with: String
  AND: [LockerClusterWhereInput!]
  OR: [LockerClusterWhereInput!]
  NOT: [LockerClusterWhereInput!]
}

input LockerClusterWhereUniqueInput {
  id: ID
  macAddress: String
}

type LockerConnection {
  pageInfo: PageInfo!
  edges: [LockerEdge]!
  aggregate: AggregateLocker!
}

input LockerCreateInput {
  idInCluster: String!
  cluster: LockerClusterCreateOneWithoutLockersInput
  busy: Boolean
  locked: Boolean
  open: Boolean
  closed: Boolean
  alarm: Boolean
  sensorPin: Int!
  alarmPin: Int!
  lockPin: Int!
  currentOwner: UserCreateOneInput
  sessions: LockerSessionCreateManyWithoutLockerInput
}

input LockerCreateManyWithoutClusterInput {
  create: [LockerCreateWithoutClusterInput!]
  connect: [LockerWhereUniqueInput!]
}

input LockerCreateOneWithoutSessionsInput {
  create: LockerCreateWithoutSessionsInput
  connect: LockerWhereUniqueInput
}

input LockerCreateWithoutClusterInput {
  idInCluster: String!
  busy: Boolean
  locked: Boolean
  open: Boolean
  closed: Boolean
  alarm: Boolean
  sensorPin: Int!
  alarmPin: Int!
  lockPin: Int!
  currentOwner: UserCreateOneInput
  sessions: LockerSessionCreateManyWithoutLockerInput
}

input LockerCreateWithoutSessionsInput {
  idInCluster: String!
  cluster: LockerClusterCreateOneWithoutLockersInput
  busy: Boolean
  locked: Boolean
  open: Boolean
  closed: Boolean
  alarm: Boolean
  sensorPin: Int!
  alarmPin: Int!
  lockPin: Int!
  currentOwner: UserCreateOneInput
}

type LockerEdge {
  node: Locker!
  cursor: String!
}

enum LockerOrderByInput {
  id_ASC
  id_DESC
  idInCluster_ASC
  idInCluster_DESC
  busy_ASC
  busy_DESC
  locked_ASC
  locked_DESC
  open_ASC
  open_DESC
  closed_ASC
  closed_DESC
  alarm_ASC
  alarm_DESC
  sensorPin_ASC
  sensorPin_DESC
  alarmPin_ASC
  alarmPin_DESC
  lockPin_ASC
  lockPin_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LockerPreviousValues {
  id: ID!
  idInCluster: String!
  busy: Boolean!
  locked: Boolean!
  open: Boolean!
  closed: Boolean
  alarm: Boolean
  sensorPin: Int!
  alarmPin: Int!
  lockPin: Int!
}

type LockerSession {
  id: ID!
  user: User!
  locker: Locker!
  state: Int!
  startedAt: DateTime!
  finishedAt: DateTime
}

type LockerSessionConnection {
  pageInfo: PageInfo!
  edges: [LockerSessionEdge]!
  aggregate: AggregateLockerSession!
}

input LockerSessionCreateInput {
  user: UserCreateOneWithoutSessionsInput!
  locker: LockerCreateOneWithoutSessionsInput!
  state: Int
  startedAt: DateTime!
  finishedAt: DateTime
}

input LockerSessionCreateManyWithoutLockerInput {
  create: [LockerSessionCreateWithoutLockerInput!]
  connect: [LockerSessionWhereUniqueInput!]
}

input LockerSessionCreateManyWithoutUserInput {
  create: [LockerSessionCreateWithoutUserInput!]
  connect: [LockerSessionWhereUniqueInput!]
}

input LockerSessionCreateWithoutLockerInput {
  user: UserCreateOneWithoutSessionsInput!
  state: Int
  startedAt: DateTime!
  finishedAt: DateTime
}

input LockerSessionCreateWithoutUserInput {
  locker: LockerCreateOneWithoutSessionsInput!
  state: Int
  startedAt: DateTime!
  finishedAt: DateTime
}

type LockerSessionEdge {
  node: LockerSession!
  cursor: String!
}

enum LockerSessionOrderByInput {
  id_ASC
  id_DESC
  state_ASC
  state_DESC
  startedAt_ASC
  startedAt_DESC
  finishedAt_ASC
  finishedAt_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LockerSessionPreviousValues {
  id: ID!
  state: Int!
  startedAt: DateTime!
  finishedAt: DateTime
}

type LockerSessionSubscriptionPayload {
  mutation: MutationType!
  node: LockerSession
  updatedFields: [String!]
  previousValues: LockerSessionPreviousValues
}

input LockerSessionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LockerSessionWhereInput
  AND: [LockerSessionSubscriptionWhereInput!]
  OR: [LockerSessionSubscriptionWhereInput!]
  NOT: [LockerSessionSubscriptionWhereInput!]
}

input LockerSessionUpdateInput {
  user: UserUpdateOneWithoutSessionsInput
  locker: LockerUpdateOneWithoutSessionsInput
  state: Int
  startedAt: DateTime
  finishedAt: DateTime
}

input LockerSessionUpdateManyWithoutLockerInput {
  create: [LockerSessionCreateWithoutLockerInput!]
  delete: [LockerSessionWhereUniqueInput!]
  connect: [LockerSessionWhereUniqueInput!]
  disconnect: [LockerSessionWhereUniqueInput!]
  update: [LockerSessionUpdateWithWhereUniqueWithoutLockerInput!]
  upsert: [LockerSessionUpsertWithWhereUniqueWithoutLockerInput!]
}

input LockerSessionUpdateManyWithoutUserInput {
  create: [LockerSessionCreateWithoutUserInput!]
  delete: [LockerSessionWhereUniqueInput!]
  connect: [LockerSessionWhereUniqueInput!]
  disconnect: [LockerSessionWhereUniqueInput!]
  update: [LockerSessionUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [LockerSessionUpsertWithWhereUniqueWithoutUserInput!]
}

input LockerSessionUpdateWithoutLockerDataInput {
  user: UserUpdateOneWithoutSessionsInput
  state: Int
  startedAt: DateTime
  finishedAt: DateTime
}

input LockerSessionUpdateWithoutUserDataInput {
  locker: LockerUpdateOneWithoutSessionsInput
  state: Int
  startedAt: DateTime
  finishedAt: DateTime
}

input LockerSessionUpdateWithWhereUniqueWithoutLockerInput {
  where: LockerSessionWhereUniqueInput!
  data: LockerSessionUpdateWithoutLockerDataInput!
}

input LockerSessionUpdateWithWhereUniqueWithoutUserInput {
  where: LockerSessionWhereUniqueInput!
  data: LockerSessionUpdateWithoutUserDataInput!
}

input LockerSessionUpsertWithWhereUniqueWithoutLockerInput {
  where: LockerSessionWhereUniqueInput!
  update: LockerSessionUpdateWithoutLockerDataInput!
  create: LockerSessionCreateWithoutLockerInput!
}

input LockerSessionUpsertWithWhereUniqueWithoutUserInput {
  where: LockerSessionWhereUniqueInput!
  update: LockerSessionUpdateWithoutUserDataInput!
  create: LockerSessionCreateWithoutUserInput!
}

input LockerSessionWhereInput {
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
  user: UserWhereInput
  locker: LockerWhereInput
  state: Int
  state_not: Int
  state_in: [Int!]
  state_not_in: [Int!]
  state_lt: Int
  state_lte: Int
  state_gt: Int
  state_gte: Int
  startedAt: DateTime
  startedAt_not: DateTime
  startedAt_in: [DateTime!]
  startedAt_not_in: [DateTime!]
  startedAt_lt: DateTime
  startedAt_lte: DateTime
  startedAt_gt: DateTime
  startedAt_gte: DateTime
  finishedAt: DateTime
  finishedAt_not: DateTime
  finishedAt_in: [DateTime!]
  finishedAt_not_in: [DateTime!]
  finishedAt_lt: DateTime
  finishedAt_lte: DateTime
  finishedAt_gt: DateTime
  finishedAt_gte: DateTime
  AND: [LockerSessionWhereInput!]
  OR: [LockerSessionWhereInput!]
  NOT: [LockerSessionWhereInput!]
}

input LockerSessionWhereUniqueInput {
  id: ID
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
  idInCluster: String
  cluster: LockerClusterUpdateOneWithoutLockersInput
  busy: Boolean
  locked: Boolean
  open: Boolean
  closed: Boolean
  alarm: Boolean
  sensorPin: Int
  alarmPin: Int
  lockPin: Int
  currentOwner: UserUpdateOneInput
  sessions: LockerSessionUpdateManyWithoutLockerInput
}

input LockerUpdateManyWithoutClusterInput {
  create: [LockerCreateWithoutClusterInput!]
  delete: [LockerWhereUniqueInput!]
  connect: [LockerWhereUniqueInput!]
  disconnect: [LockerWhereUniqueInput!]
  update: [LockerUpdateWithWhereUniqueWithoutClusterInput!]
  upsert: [LockerUpsertWithWhereUniqueWithoutClusterInput!]
}

input LockerUpdateOneWithoutSessionsInput {
  create: LockerCreateWithoutSessionsInput
  update: LockerUpdateWithoutSessionsDataInput
  upsert: LockerUpsertWithoutSessionsInput
  delete: Boolean
  connect: LockerWhereUniqueInput
}

input LockerUpdateWithoutClusterDataInput {
  idInCluster: String
  busy: Boolean
  locked: Boolean
  open: Boolean
  closed: Boolean
  alarm: Boolean
  sensorPin: Int
  alarmPin: Int
  lockPin: Int
  currentOwner: UserUpdateOneInput
  sessions: LockerSessionUpdateManyWithoutLockerInput
}

input LockerUpdateWithoutSessionsDataInput {
  idInCluster: String
  cluster: LockerClusterUpdateOneWithoutLockersInput
  busy: Boolean
  locked: Boolean
  open: Boolean
  closed: Boolean
  alarm: Boolean
  sensorPin: Int
  alarmPin: Int
  lockPin: Int
  currentOwner: UserUpdateOneInput
}

input LockerUpdateWithWhereUniqueWithoutClusterInput {
  where: LockerWhereUniqueInput!
  data: LockerUpdateWithoutClusterDataInput!
}

input LockerUpsertWithoutSessionsInput {
  update: LockerUpdateWithoutSessionsDataInput!
  create: LockerCreateWithoutSessionsInput!
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
  idInCluster: String
  idInCluster_not: String
  idInCluster_in: [String!]
  idInCluster_not_in: [String!]
  idInCluster_lt: String
  idInCluster_lte: String
  idInCluster_gt: String
  idInCluster_gte: String
  idInCluster_contains: String
  idInCluster_not_contains: String
  idInCluster_starts_with: String
  idInCluster_not_starts_with: String
  idInCluster_ends_with: String
  idInCluster_not_ends_with: String
  cluster: LockerClusterWhereInput
  busy: Boolean
  busy_not: Boolean
  locked: Boolean
  locked_not: Boolean
  open: Boolean
  open_not: Boolean
  closed: Boolean
  closed_not: Boolean
  alarm: Boolean
  alarm_not: Boolean
  sensorPin: Int
  sensorPin_not: Int
  sensorPin_in: [Int!]
  sensorPin_not_in: [Int!]
  sensorPin_lt: Int
  sensorPin_lte: Int
  sensorPin_gt: Int
  sensorPin_gte: Int
  alarmPin: Int
  alarmPin_not: Int
  alarmPin_in: [Int!]
  alarmPin_not_in: [Int!]
  alarmPin_lt: Int
  alarmPin_lte: Int
  alarmPin_gt: Int
  alarmPin_gte: Int
  lockPin: Int
  lockPin_not: Int
  lockPin_in: [Int!]
  lockPin_not_in: [Int!]
  lockPin_lt: Int
  lockPin_lte: Int
  lockPin_gt: Int
  lockPin_gte: Int
  currentOwner: UserWhereInput
  sessions_every: LockerSessionWhereInput
  sessions_some: LockerSessionWhereInput
  sessions_none: LockerSessionWhereInput
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
  createLockerSession(data: LockerSessionCreateInput!): LockerSession!
  updateLockerSession(data: LockerSessionUpdateInput!, where: LockerSessionWhereUniqueInput!): LockerSession
  updateManyLockerSessions(data: LockerSessionUpdateInput!, where: LockerSessionWhereInput): BatchPayload!
  upsertLockerSession(where: LockerSessionWhereUniqueInput!, create: LockerSessionCreateInput!, update: LockerSessionUpdateInput!): LockerSession!
  deleteLockerSession(where: LockerSessionWhereUniqueInput!): LockerSession
  deleteManyLockerSessions(where: LockerSessionWhereInput): BatchPayload!
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
  lockerSession(where: LockerSessionWhereUniqueInput!): LockerSession
  lockerSessions(where: LockerSessionWhereInput, orderBy: LockerSessionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LockerSession]!
  lockerSessionsConnection(where: LockerSessionWhereInput, orderBy: LockerSessionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LockerSessionConnection!
  node(id: ID!): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  lockerCluster(where: LockerClusterSubscriptionWhereInput): LockerClusterSubscriptionPayload
  locker(where: LockerSubscriptionWhereInput): LockerSubscriptionPayload
  lockerSession(where: LockerSessionSubscriptionWhereInput): LockerSessionSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  credit: Int!
  sessions(where: LockerSessionWhereInput, orderBy: LockerSessionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LockerSession!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
  password: String!
  credit: Int
  sessions: LockerSessionCreateManyWithoutUserInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutSessionsInput {
  create: UserCreateWithoutSessionsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutSessionsInput {
  name: String!
  email: String!
  password: String!
  credit: Int
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
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  credit_ASC
  credit_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
  credit: Int!
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

input UserUpdateDataInput {
  name: String
  email: String
  password: String
  credit: Int
  sessions: LockerSessionUpdateManyWithoutUserInput
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  credit: Int
  sessions: LockerSessionUpdateManyWithoutUserInput
}

input UserUpdateOneInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutSessionsInput {
  create: UserCreateWithoutSessionsInput
  update: UserUpdateWithoutSessionsDataInput
  upsert: UserUpsertWithoutSessionsInput
  delete: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutSessionsDataInput {
  name: String
  email: String
  password: String
  credit: Int
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutSessionsInput {
  update: UserUpdateWithoutSessionsDataInput!
  create: UserCreateWithoutSessionsInput!
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
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  credit: Int
  credit_not: Int
  credit_in: [Int!]
  credit_not_in: [Int!]
  credit_lt: Int
  credit_lte: Int
  credit_gt: Int
  credit_gte: Int
  sessions_every: LockerSessionWhereInput
  sessions_some: LockerSessionWhereInput
  sessions_none: LockerSessionWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`;
