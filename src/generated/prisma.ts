import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    lockerClusters: <T = LockerCluster[]>(args: { where?: LockerClusterWhereInput, orderBy?: LockerClusterOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    lockerSessions: <T = LockerSession[]>(args: { where?: LockerSessionWhereInput, orderBy?: LockerSessionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    lockers: <T = Locker[]>(args: { where?: LockerWhereInput, orderBy?: LockerOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    lockerCluster: <T = LockerCluster | null>(args: { where: LockerClusterWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    lockerSession: <T = LockerSession | null>(args: { where: LockerSessionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    locker: <T = Locker | null>(args: { where: LockerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    lockerClustersConnection: <T = LockerClusterConnection>(args: { where?: LockerClusterWhereInput, orderBy?: LockerClusterOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    lockerSessionsConnection: <T = LockerSessionConnection>(args: { where?: LockerSessionWhereInput, orderBy?: LockerSessionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    lockersConnection: <T = LockerConnection>(args: { where?: LockerWhereInput, orderBy?: LockerOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLockerCluster: <T = LockerCluster>(args: { data: LockerClusterCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLockerSession: <T = LockerSession>(args: { data: LockerSessionCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLocker: <T = Locker>(args: { data: LockerCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateLockerCluster: <T = LockerCluster | null>(args: { data: LockerClusterUpdateInput, where: LockerClusterWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateLockerSession: <T = LockerSession | null>(args: { data: LockerSessionUpdateInput, where: LockerSessionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateLocker: <T = Locker | null>(args: { data: LockerUpdateInput, where: LockerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteLockerCluster: <T = LockerCluster | null>(args: { where: LockerClusterWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteLockerSession: <T = LockerSession | null>(args: { where: LockerSessionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteLocker: <T = Locker | null>(args: { where: LockerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLockerCluster: <T = LockerCluster>(args: { where: LockerClusterWhereUniqueInput, create: LockerClusterCreateInput, update: LockerClusterUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLockerSession: <T = LockerSession>(args: { where: LockerSessionWhereUniqueInput, create: LockerSessionCreateInput, update: LockerSessionUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLocker: <T = Locker>(args: { where: LockerWhereUniqueInput, create: LockerCreateInput, update: LockerUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLockerClusters: <T = BatchPayload>(args: { data: LockerClusterUpdateInput, where?: LockerClusterWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLockerSessions: <T = BatchPayload>(args: { data: LockerSessionUpdateInput, where?: LockerSessionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLockers: <T = BatchPayload>(args: { data: LockerUpdateInput, where?: LockerWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLockerClusters: <T = BatchPayload>(args: { where?: LockerClusterWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLockerSessions: <T = BatchPayload>(args: { where?: LockerSessionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLockers: <T = BatchPayload>(args: { where?: LockerWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    lockerCluster: <T = LockerClusterSubscriptionPayload | null>(args: { where?: LockerClusterSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    lockerSession: <T = LockerSessionSubscriptionPayload | null>(args: { where?: LockerSessionSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    locker: <T = LockerSubscriptionPayload | null>(args: { where?: LockerSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  LockerCluster: (where?: LockerClusterWhereInput) => Promise<boolean>
  LockerSession: (where?: LockerSessionWhereInput) => Promise<boolean>
  Locker: (where?: LockerWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateLocker {
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
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

type Locker implements Node {
  id: ID!
  cluster(where: LockerClusterWhereInput): LockerCluster
  busy: Boolean!
  locked: Boolean!
  open: Boolean!
  alarm: Boolean
  sensorPin: Int!
  alarmPin: Int!
  lockPin: Int!
}

type LockerCluster implements Node {
  id: ID!
  lockers(where: LockerWhereInput, orderBy: LockerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Locker!]
  macAddress: String!
}

"""A connection to a list of items."""
type LockerClusterConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [LockerClusterEdge]!
  aggregate: AggregateLockerCluster!
}

input LockerClusterCreateInput {
  macAddress: String
  lockers: LockerCreateManyWithoutClusterInput
}

input LockerClusterCreateOneWithoutLockersInput {
  create: LockerClusterCreateWithoutLockersInput
  connect: LockerClusterWhereUniqueInput
}

input LockerClusterCreateWithoutLockersInput {
  macAddress: String
}

"""An edge in a connection."""
type LockerClusterEdge {
  """The item at the end of the edge."""
  node: LockerCluster!

  """A cursor for use in pagination."""
  cursor: String!
}

enum LockerClusterOrderByInput {
  id_ASC
  id_DESC
  macAddress_ASC
  macAddress_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
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
  """Logical AND on all given filters."""
  AND: [LockerClusterSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [LockerClusterSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LockerClusterSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: LockerClusterWhereInput
}

input LockerClusterUpdateInput {
  macAddress: String
  lockers: LockerUpdateManyWithoutClusterInput
}

input LockerClusterUpdateOneWithoutLockersInput {
  create: LockerClusterCreateWithoutLockersInput
  connect: LockerClusterWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: LockerClusterUpdateWithoutLockersDataInput
  upsert: LockerClusterUpsertWithoutLockersInput
}

input LockerClusterUpdateWithoutLockersDataInput {
  macAddress: String
}

input LockerClusterUpsertWithoutLockersInput {
  update: LockerClusterUpdateWithoutLockersDataInput!
  create: LockerClusterCreateWithoutLockersInput!
}

input LockerClusterWhereInput {
  """Logical AND on all given filters."""
  AND: [LockerClusterWhereInput!]

  """Logical OR on all given filters."""
  OR: [LockerClusterWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LockerClusterWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  macAddress: String

  """All values that are not equal to given value."""
  macAddress_not: String

  """All values that are contained in given list."""
  macAddress_in: [String!]

  """All values that are not contained in given list."""
  macAddress_not_in: [String!]

  """All values less than the given value."""
  macAddress_lt: String

  """All values less than or equal the given value."""
  macAddress_lte: String

  """All values greater than the given value."""
  macAddress_gt: String

  """All values greater than or equal the given value."""
  macAddress_gte: String

  """All values containing the given string."""
  macAddress_contains: String

  """All values not containing the given string."""
  macAddress_not_contains: String

  """All values starting with the given string."""
  macAddress_starts_with: String

  """All values not starting with the given string."""
  macAddress_not_starts_with: String

  """All values ending with the given string."""
  macAddress_ends_with: String

  """All values not ending with the given string."""
  macAddress_not_ends_with: String
  lockers_every: LockerWhereInput
  lockers_some: LockerWhereInput
  lockers_none: LockerWhereInput
}

input LockerClusterWhereUniqueInput {
  id: ID
  macAddress: String
}

"""A connection to a list of items."""
type LockerConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [LockerEdge]!
  aggregate: AggregateLocker!
}

input LockerCreateInput {
  busy: Boolean
  locked: Boolean
  open: Boolean
  alarm: Boolean
  sensorPin: Int!
  alarmPin: Int!
  lockPin: Int!
  cluster: LockerClusterCreateOneWithoutLockersInput
}

input LockerCreateManyWithoutClusterInput {
  create: [LockerCreateWithoutClusterInput!]
  connect: [LockerWhereUniqueInput!]
}

input LockerCreateOneInput {
  create: LockerCreateInput
  connect: LockerWhereUniqueInput
}

input LockerCreateWithoutClusterInput {
  busy: Boolean
  locked: Boolean
  open: Boolean
  alarm: Boolean
  sensorPin: Int!
  alarmPin: Int!
  lockPin: Int!
}

"""An edge in a connection."""
type LockerEdge {
  """The item at the end of the edge."""
  node: Locker!

  """A cursor for use in pagination."""
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
  alarm_ASC
  alarm_DESC
  sensorPin_ASC
  sensorPin_DESC
  alarmPin_ASC
  alarmPin_DESC
  lockPin_ASC
  lockPin_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type LockerPreviousValues {
  id: ID!
  busy: Boolean!
  locked: Boolean!
  open: Boolean!
  alarm: Boolean
  sensorPin: Int!
  alarmPin: Int!
  lockPin: Int!
}

type LockerSession implements Node {
  id: ID!
  user(where: UserWhereInput): User!
  locker(where: LockerWhereInput): Locker!
  state: Int!
  startedAt: DateTime!
  finishedAt: DateTime
}

"""A connection to a list of items."""
type LockerSessionConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [LockerSessionEdge]!
  aggregate: AggregateLockerSession!
}

input LockerSessionCreateInput {
  state: Int
  startedAt: DateTime!
  finishedAt: DateTime
  user: UserCreateOneWithoutSessionsInput!
  locker: LockerCreateOneInput!
}

input LockerSessionCreateManyWithoutUserInput {
  create: [LockerSessionCreateWithoutUserInput!]
  connect: [LockerSessionWhereUniqueInput!]
}

input LockerSessionCreateWithoutUserInput {
  state: Int
  startedAt: DateTime!
  finishedAt: DateTime
  locker: LockerCreateOneInput!
}

"""An edge in a connection."""
type LockerSessionEdge {
  """The item at the end of the edge."""
  node: LockerSession!

  """A cursor for use in pagination."""
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
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
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
  """Logical AND on all given filters."""
  AND: [LockerSessionSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [LockerSessionSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LockerSessionSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: LockerSessionWhereInput
}

input LockerSessionUpdateInput {
  state: Int
  startedAt: DateTime
  finishedAt: DateTime
  user: UserUpdateOneWithoutSessionsInput
  locker: LockerUpdateOneInput
}

input LockerSessionUpdateManyWithoutUserInput {
  create: [LockerSessionCreateWithoutUserInput!]
  connect: [LockerSessionWhereUniqueInput!]
  disconnect: [LockerSessionWhereUniqueInput!]
  delete: [LockerSessionWhereUniqueInput!]
  update: [LockerSessionUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [LockerSessionUpsertWithWhereUniqueWithoutUserInput!]
}

input LockerSessionUpdateWithoutUserDataInput {
  state: Int
  startedAt: DateTime
  finishedAt: DateTime
  locker: LockerUpdateOneInput
}

input LockerSessionUpdateWithWhereUniqueWithoutUserInput {
  where: LockerSessionWhereUniqueInput!
  data: LockerSessionUpdateWithoutUserDataInput!
}

input LockerSessionUpsertWithWhereUniqueWithoutUserInput {
  where: LockerSessionWhereUniqueInput!
  update: LockerSessionUpdateWithoutUserDataInput!
  create: LockerSessionCreateWithoutUserInput!
}

input LockerSessionWhereInput {
  """Logical AND on all given filters."""
  AND: [LockerSessionWhereInput!]

  """Logical OR on all given filters."""
  OR: [LockerSessionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LockerSessionWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  state: Int

  """All values that are not equal to given value."""
  state_not: Int

  """All values that are contained in given list."""
  state_in: [Int!]

  """All values that are not contained in given list."""
  state_not_in: [Int!]

  """All values less than the given value."""
  state_lt: Int

  """All values less than or equal the given value."""
  state_lte: Int

  """All values greater than the given value."""
  state_gt: Int

  """All values greater than or equal the given value."""
  state_gte: Int
  startedAt: DateTime

  """All values that are not equal to given value."""
  startedAt_not: DateTime

  """All values that are contained in given list."""
  startedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  startedAt_not_in: [DateTime!]

  """All values less than the given value."""
  startedAt_lt: DateTime

  """All values less than or equal the given value."""
  startedAt_lte: DateTime

  """All values greater than the given value."""
  startedAt_gt: DateTime

  """All values greater than or equal the given value."""
  startedAt_gte: DateTime
  finishedAt: DateTime

  """All values that are not equal to given value."""
  finishedAt_not: DateTime

  """All values that are contained in given list."""
  finishedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  finishedAt_not_in: [DateTime!]

  """All values less than the given value."""
  finishedAt_lt: DateTime

  """All values less than or equal the given value."""
  finishedAt_lte: DateTime

  """All values greater than the given value."""
  finishedAt_gt: DateTime

  """All values greater than or equal the given value."""
  finishedAt_gte: DateTime
  user: UserWhereInput
  locker: LockerWhereInput
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
  """Logical AND on all given filters."""
  AND: [LockerSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [LockerSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LockerSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: LockerWhereInput
}

input LockerUpdateDataInput {
  busy: Boolean
  locked: Boolean
  open: Boolean
  alarm: Boolean
  sensorPin: Int
  alarmPin: Int
  lockPin: Int
  cluster: LockerClusterUpdateOneWithoutLockersInput
}

input LockerUpdateInput {
  busy: Boolean
  locked: Boolean
  open: Boolean
  alarm: Boolean
  sensorPin: Int
  alarmPin: Int
  lockPin: Int
  cluster: LockerClusterUpdateOneWithoutLockersInput
}

input LockerUpdateManyWithoutClusterInput {
  create: [LockerCreateWithoutClusterInput!]
  connect: [LockerWhereUniqueInput!]
  disconnect: [LockerWhereUniqueInput!]
  delete: [LockerWhereUniqueInput!]
  update: [LockerUpdateWithWhereUniqueWithoutClusterInput!]
  upsert: [LockerUpsertWithWhereUniqueWithoutClusterInput!]
}

input LockerUpdateOneInput {
  create: LockerCreateInput
  connect: LockerWhereUniqueInput
  delete: Boolean
  update: LockerUpdateDataInput
  upsert: LockerUpsertNestedInput
}

input LockerUpdateWithoutClusterDataInput {
  busy: Boolean
  locked: Boolean
  open: Boolean
  alarm: Boolean
  sensorPin: Int
  alarmPin: Int
  lockPin: Int
}

input LockerUpdateWithWhereUniqueWithoutClusterInput {
  where: LockerWhereUniqueInput!
  data: LockerUpdateWithoutClusterDataInput!
}

input LockerUpsertNestedInput {
  update: LockerUpdateDataInput!
  create: LockerCreateInput!
}

input LockerUpsertWithWhereUniqueWithoutClusterInput {
  where: LockerWhereUniqueInput!
  update: LockerUpdateWithoutClusterDataInput!
  create: LockerCreateWithoutClusterInput!
}

input LockerWhereInput {
  """Logical AND on all given filters."""
  AND: [LockerWhereInput!]

  """Logical OR on all given filters."""
  OR: [LockerWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LockerWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  busy: Boolean

  """All values that are not equal to given value."""
  busy_not: Boolean
  locked: Boolean

  """All values that are not equal to given value."""
  locked_not: Boolean
  open: Boolean

  """All values that are not equal to given value."""
  open_not: Boolean
  alarm: Boolean

  """All values that are not equal to given value."""
  alarm_not: Boolean
  sensorPin: Int

  """All values that are not equal to given value."""
  sensorPin_not: Int

  """All values that are contained in given list."""
  sensorPin_in: [Int!]

  """All values that are not contained in given list."""
  sensorPin_not_in: [Int!]

  """All values less than the given value."""
  sensorPin_lt: Int

  """All values less than or equal the given value."""
  sensorPin_lte: Int

  """All values greater than the given value."""
  sensorPin_gt: Int

  """All values greater than or equal the given value."""
  sensorPin_gte: Int
  alarmPin: Int

  """All values that are not equal to given value."""
  alarmPin_not: Int

  """All values that are contained in given list."""
  alarmPin_in: [Int!]

  """All values that are not contained in given list."""
  alarmPin_not_in: [Int!]

  """All values less than the given value."""
  alarmPin_lt: Int

  """All values less than or equal the given value."""
  alarmPin_lte: Int

  """All values greater than the given value."""
  alarmPin_gt: Int

  """All values greater than or equal the given value."""
  alarmPin_gte: Int
  lockPin: Int

  """All values that are not equal to given value."""
  lockPin_not: Int

  """All values that are contained in given list."""
  lockPin_in: [Int!]

  """All values that are not contained in given list."""
  lockPin_not_in: [Int!]

  """All values less than the given value."""
  lockPin_lt: Int

  """All values less than or equal the given value."""
  lockPin_lte: Int

  """All values greater than the given value."""
  lockPin_gt: Int

  """All values greater than or equal the given value."""
  lockPin_gte: Int
  cluster: LockerClusterWhereInput
}

input LockerWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  createLockerCluster(data: LockerClusterCreateInput!): LockerCluster!
  createLockerSession(data: LockerSessionCreateInput!): LockerSession!
  createLocker(data: LockerCreateInput!): Locker!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateLockerCluster(data: LockerClusterUpdateInput!, where: LockerClusterWhereUniqueInput!): LockerCluster
  updateLockerSession(data: LockerSessionUpdateInput!, where: LockerSessionWhereUniqueInput!): LockerSession
  updateLocker(data: LockerUpdateInput!, where: LockerWhereUniqueInput!): Locker
  deleteUser(where: UserWhereUniqueInput!): User
  deleteLockerCluster(where: LockerClusterWhereUniqueInput!): LockerCluster
  deleteLockerSession(where: LockerSessionWhereUniqueInput!): LockerSession
  deleteLocker(where: LockerWhereUniqueInput!): Locker
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertLockerCluster(where: LockerClusterWhereUniqueInput!, create: LockerClusterCreateInput!, update: LockerClusterUpdateInput!): LockerCluster!
  upsertLockerSession(where: LockerSessionWhereUniqueInput!, create: LockerSessionCreateInput!, update: LockerSessionUpdateInput!): LockerSession!
  upsertLocker(where: LockerWhereUniqueInput!, create: LockerCreateInput!, update: LockerUpdateInput!): Locker!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyLockerClusters(data: LockerClusterUpdateInput!, where: LockerClusterWhereInput): BatchPayload!
  updateManyLockerSessions(data: LockerSessionUpdateInput!, where: LockerSessionWhereInput): BatchPayload!
  updateManyLockers(data: LockerUpdateInput!, where: LockerWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyLockerClusters(where: LockerClusterWhereInput): BatchPayload!
  deleteManyLockerSessions(where: LockerSessionWhereInput): BatchPayload!
  deleteManyLockers(where: LockerWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  lockerClusters(where: LockerClusterWhereInput, orderBy: LockerClusterOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LockerCluster]!
  lockerSessions(where: LockerSessionWhereInput, orderBy: LockerSessionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LockerSession]!
  lockers(where: LockerWhereInput, orderBy: LockerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Locker]!
  user(where: UserWhereUniqueInput!): User
  lockerCluster(where: LockerClusterWhereUniqueInput!): LockerCluster
  lockerSession(where: LockerSessionWhereUniqueInput!): LockerSession
  locker(where: LockerWhereUniqueInput!): Locker
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  lockerClustersConnection(where: LockerClusterWhereInput, orderBy: LockerClusterOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LockerClusterConnection!
  lockerSessionsConnection(where: LockerSessionWhereInput, orderBy: LockerSessionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LockerSessionConnection!
  lockersConnection(where: LockerWhereInput, orderBy: LockerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LockerConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  lockerCluster(where: LockerClusterSubscriptionWhereInput): LockerClusterSubscriptionPayload
  lockerSession(where: LockerSessionSubscriptionWhereInput): LockerSessionSubscriptionPayload
  locker(where: LockerSubscriptionWhereInput): LockerSubscriptionPayload
}

type User implements Node {
  id: ID!
  name: String!
  email: String!
  password: String!
  credit: Int!
  sessions(where: LockerSessionWhereInput, orderBy: LockerSessionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LockerSession!]
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
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

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
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
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
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
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  credit: Int
  sessions: LockerSessionUpdateManyWithoutUserInput
}

input UserUpdateOneWithoutSessionsInput {
  create: UserCreateWithoutSessionsInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutSessionsDataInput
  upsert: UserUpsertWithoutSessionsInput
}

input UserUpdateWithoutSessionsDataInput {
  name: String
  email: String
  password: String
  credit: Int
}

input UserUpsertWithoutSessionsInput {
  update: UserUpdateWithoutSessionsDataInput!
  create: UserCreateWithoutSessionsInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  credit: Int

  """All values that are not equal to given value."""
  credit_not: Int

  """All values that are contained in given list."""
  credit_in: [Int!]

  """All values that are not contained in given list."""
  credit_not_in: [Int!]

  """All values less than the given value."""
  credit_lt: Int

  """All values less than or equal the given value."""
  credit_lte: Int

  """All values greater than the given value."""
  credit_gt: Int

  """All values greater than or equal the given value."""
  credit_gte: Int
  sessions_every: LockerSessionWhereInput
  sessions_some: LockerSessionWhereInput
  sessions_none: LockerSessionWhereInput
}

input UserWhereUniqueInput {
  id: ID
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'credit_ASC' |
  'credit_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type LockerSessionOrderByInput =   'id_ASC' |
  'id_DESC' |
  'state_ASC' |
  'state_DESC' |
  'startedAt_ASC' |
  'startedAt_DESC' |
  'finishedAt_ASC' |
  'finishedAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type LockerOrderByInput =   'id_ASC' |
  'id_DESC' |
  'busy_ASC' |
  'busy_DESC' |
  'locked_ASC' |
  'locked_DESC' |
  'open_ASC' |
  'open_DESC' |
  'alarm_ASC' |
  'alarm_DESC' |
  'sensorPin_ASC' |
  'sensorPin_DESC' |
  'alarmPin_ASC' |
  'alarmPin_DESC' |
  'lockPin_ASC' |
  'lockPin_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type LockerClusterOrderByInput =   'id_ASC' |
  'id_DESC' |
  'macAddress_ASC' |
  'macAddress_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface LockerClusterCreateInput {
  macAddress?: String
  lockers?: LockerCreateManyWithoutClusterInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  credit?: Int
  credit_not?: Int
  credit_in?: Int[] | Int
  credit_not_in?: Int[] | Int
  credit_lt?: Int
  credit_lte?: Int
  credit_gt?: Int
  credit_gte?: Int
  sessions_every?: LockerSessionWhereInput
  sessions_some?: LockerSessionWhereInput
  sessions_none?: LockerSessionWhereInput
}

export interface LockerSessionUpsertWithWhereUniqueWithoutUserInput {
  where: LockerSessionWhereUniqueInput
  update: LockerSessionUpdateWithoutUserDataInput
  create: LockerSessionCreateWithoutUserInput
}

export interface LockerUpdateOneInput {
  create?: LockerCreateInput
  connect?: LockerWhereUniqueInput
  delete?: Boolean
  update?: LockerUpdateDataInput
  upsert?: LockerUpsertNestedInput
}

export interface LockerUpsertNestedInput {
  update: LockerUpdateDataInput
  create: LockerCreateInput
}

export interface LockerSessionCreateInput {
  state?: Int
  startedAt: DateTime
  finishedAt?: DateTime
  user: UserCreateOneWithoutSessionsInput
  locker: LockerCreateOneInput
}

export interface LockerClusterUpsertWithoutLockersInput {
  update: LockerClusterUpdateWithoutLockersDataInput
  create: LockerClusterCreateWithoutLockersInput
}

export interface LockerSubscriptionWhereInput {
  AND?: LockerSubscriptionWhereInput[] | LockerSubscriptionWhereInput
  OR?: LockerSubscriptionWhereInput[] | LockerSubscriptionWhereInput
  NOT?: LockerSubscriptionWhereInput[] | LockerSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: LockerWhereInput
}

export interface LockerClusterUpdateWithoutLockersDataInput {
  macAddress?: String
}

export interface LockerSessionSubscriptionWhereInput {
  AND?: LockerSessionSubscriptionWhereInput[] | LockerSessionSubscriptionWhereInput
  OR?: LockerSessionSubscriptionWhereInput[] | LockerSessionSubscriptionWhereInput
  NOT?: LockerSessionSubscriptionWhereInput[] | LockerSessionSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: LockerSessionWhereInput
}

export interface LockerClusterUpdateOneWithoutLockersInput {
  create?: LockerClusterCreateWithoutLockersInput
  connect?: LockerClusterWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: LockerClusterUpdateWithoutLockersDataInput
  upsert?: LockerClusterUpsertWithoutLockersInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface UserCreateInput {
  name: String
  email: String
  password: String
  credit?: Int
  sessions?: LockerSessionCreateManyWithoutUserInput
}

export interface LockerSessionWhereInput {
  AND?: LockerSessionWhereInput[] | LockerSessionWhereInput
  OR?: LockerSessionWhereInput[] | LockerSessionWhereInput
  NOT?: LockerSessionWhereInput[] | LockerSessionWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  state?: Int
  state_not?: Int
  state_in?: Int[] | Int
  state_not_in?: Int[] | Int
  state_lt?: Int
  state_lte?: Int
  state_gt?: Int
  state_gte?: Int
  startedAt?: DateTime
  startedAt_not?: DateTime
  startedAt_in?: DateTime[] | DateTime
  startedAt_not_in?: DateTime[] | DateTime
  startedAt_lt?: DateTime
  startedAt_lte?: DateTime
  startedAt_gt?: DateTime
  startedAt_gte?: DateTime
  finishedAt?: DateTime
  finishedAt_not?: DateTime
  finishedAt_in?: DateTime[] | DateTime
  finishedAt_not_in?: DateTime[] | DateTime
  finishedAt_lt?: DateTime
  finishedAt_lte?: DateTime
  finishedAt_gt?: DateTime
  finishedAt_gte?: DateTime
  user?: UserWhereInput
  locker?: LockerWhereInput
}

export interface LockerSessionCreateManyWithoutUserInput {
  create?: LockerSessionCreateWithoutUserInput[] | LockerSessionCreateWithoutUserInput
  connect?: LockerSessionWhereUniqueInput[] | LockerSessionWhereUniqueInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
}

export interface LockerSessionCreateWithoutUserInput {
  state?: Int
  startedAt: DateTime
  finishedAt?: DateTime
  locker: LockerCreateOneInput
}

export interface LockerSessionWhereUniqueInput {
  id?: ID_Input
}

export interface LockerCreateOneInput {
  create?: LockerCreateInput
  connect?: LockerWhereUniqueInput
}

export interface UserUpdateWithoutSessionsDataInput {
  name?: String
  email?: String
  password?: String
  credit?: Int
}

export interface LockerCreateInput {
  busy?: Boolean
  locked?: Boolean
  open?: Boolean
  alarm?: Boolean
  sensorPin: Int
  alarmPin: Int
  lockPin: Int
  cluster?: LockerClusterCreateOneWithoutLockersInput
}

export interface LockerSessionUpdateInput {
  state?: Int
  startedAt?: DateTime
  finishedAt?: DateTime
  user?: UserUpdateOneWithoutSessionsInput
  locker?: LockerUpdateOneInput
}

export interface LockerClusterCreateOneWithoutLockersInput {
  create?: LockerClusterCreateWithoutLockersInput
  connect?: LockerClusterWhereUniqueInput
}

export interface LockerUpdateWithoutClusterDataInput {
  busy?: Boolean
  locked?: Boolean
  open?: Boolean
  alarm?: Boolean
  sensorPin?: Int
  alarmPin?: Int
  lockPin?: Int
}

export interface LockerClusterCreateWithoutLockersInput {
  macAddress?: String
}

export interface LockerUpdateManyWithoutClusterInput {
  create?: LockerCreateWithoutClusterInput[] | LockerCreateWithoutClusterInput
  connect?: LockerWhereUniqueInput[] | LockerWhereUniqueInput
  disconnect?: LockerWhereUniqueInput[] | LockerWhereUniqueInput
  delete?: LockerWhereUniqueInput[] | LockerWhereUniqueInput
  update?: LockerUpdateWithWhereUniqueWithoutClusterInput[] | LockerUpdateWithWhereUniqueWithoutClusterInput
  upsert?: LockerUpsertWithWhereUniqueWithoutClusterInput[] | LockerUpsertWithWhereUniqueWithoutClusterInput
}

export interface LockerUpdateDataInput {
  busy?: Boolean
  locked?: Boolean
  open?: Boolean
  alarm?: Boolean
  sensorPin?: Int
  alarmPin?: Int
  lockPin?: Int
  cluster?: LockerClusterUpdateOneWithoutLockersInput
}

export interface LockerWhereInput {
  AND?: LockerWhereInput[] | LockerWhereInput
  OR?: LockerWhereInput[] | LockerWhereInput
  NOT?: LockerWhereInput[] | LockerWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  busy?: Boolean
  busy_not?: Boolean
  locked?: Boolean
  locked_not?: Boolean
  open?: Boolean
  open_not?: Boolean
  alarm?: Boolean
  alarm_not?: Boolean
  sensorPin?: Int
  sensorPin_not?: Int
  sensorPin_in?: Int[] | Int
  sensorPin_not_in?: Int[] | Int
  sensorPin_lt?: Int
  sensorPin_lte?: Int
  sensorPin_gt?: Int
  sensorPin_gte?: Int
  alarmPin?: Int
  alarmPin_not?: Int
  alarmPin_in?: Int[] | Int
  alarmPin_not_in?: Int[] | Int
  alarmPin_lt?: Int
  alarmPin_lte?: Int
  alarmPin_gt?: Int
  alarmPin_gte?: Int
  lockPin?: Int
  lockPin_not?: Int
  lockPin_in?: Int[] | Int
  lockPin_not_in?: Int[] | Int
  lockPin_lt?: Int
  lockPin_lte?: Int
  lockPin_gt?: Int
  lockPin_gte?: Int
  cluster?: LockerClusterWhereInput
}

export interface LockerCreateManyWithoutClusterInput {
  create?: LockerCreateWithoutClusterInput[] | LockerCreateWithoutClusterInput
  connect?: LockerWhereUniqueInput[] | LockerWhereUniqueInput
}

export interface LockerClusterSubscriptionWhereInput {
  AND?: LockerClusterSubscriptionWhereInput[] | LockerClusterSubscriptionWhereInput
  OR?: LockerClusterSubscriptionWhereInput[] | LockerClusterSubscriptionWhereInput
  NOT?: LockerClusterSubscriptionWhereInput[] | LockerClusterSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: LockerClusterWhereInput
}

export interface LockerCreateWithoutClusterInput {
  busy?: Boolean
  locked?: Boolean
  open?: Boolean
  alarm?: Boolean
  sensorPin: Int
  alarmPin: Int
  lockPin: Int
}

export interface UserUpsertWithoutSessionsInput {
  update: UserUpdateWithoutSessionsDataInput
  create: UserCreateWithoutSessionsInput
}

export interface LockerClusterWhereInput {
  AND?: LockerClusterWhereInput[] | LockerClusterWhereInput
  OR?: LockerClusterWhereInput[] | LockerClusterWhereInput
  NOT?: LockerClusterWhereInput[] | LockerClusterWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  macAddress?: String
  macAddress_not?: String
  macAddress_in?: String[] | String
  macAddress_not_in?: String[] | String
  macAddress_lt?: String
  macAddress_lte?: String
  macAddress_gt?: String
  macAddress_gte?: String
  macAddress_contains?: String
  macAddress_not_contains?: String
  macAddress_starts_with?: String
  macAddress_not_starts_with?: String
  macAddress_ends_with?: String
  macAddress_not_ends_with?: String
  lockers_every?: LockerWhereInput
  lockers_some?: LockerWhereInput
  lockers_none?: LockerWhereInput
}

export interface LockerWhereUniqueInput {
  id?: ID_Input
}

export interface UserCreateOneWithoutSessionsInput {
  create?: UserCreateWithoutSessionsInput
  connect?: UserWhereUniqueInput
}

export interface LockerUpsertWithWhereUniqueWithoutClusterInput {
  where: LockerWhereUniqueInput
  update: LockerUpdateWithoutClusterDataInput
  create: LockerCreateWithoutClusterInput
}

export interface UserCreateWithoutSessionsInput {
  name: String
  email: String
  password: String
  credit?: Int
}

export interface LockerClusterUpdateInput {
  macAddress?: String
  lockers?: LockerUpdateManyWithoutClusterInput
}

export interface LockerUpdateInput {
  busy?: Boolean
  locked?: Boolean
  open?: Boolean
  alarm?: Boolean
  sensorPin?: Int
  alarmPin?: Int
  lockPin?: Int
  cluster?: LockerClusterUpdateOneWithoutLockersInput
}

export interface LockerSessionUpdateWithoutUserDataInput {
  state?: Int
  startedAt?: DateTime
  finishedAt?: DateTime
  locker?: LockerUpdateOneInput
}

export interface LockerSessionUpdateWithWhereUniqueWithoutUserInput {
  where: LockerSessionWhereUniqueInput
  data: LockerSessionUpdateWithoutUserDataInput
}

export interface LockerSessionUpdateManyWithoutUserInput {
  create?: LockerSessionCreateWithoutUserInput[] | LockerSessionCreateWithoutUserInput
  connect?: LockerSessionWhereUniqueInput[] | LockerSessionWhereUniqueInput
  disconnect?: LockerSessionWhereUniqueInput[] | LockerSessionWhereUniqueInput
  delete?: LockerSessionWhereUniqueInput[] | LockerSessionWhereUniqueInput
  update?: LockerSessionUpdateWithWhereUniqueWithoutUserInput[] | LockerSessionUpdateWithWhereUniqueWithoutUserInput
  upsert?: LockerSessionUpsertWithWhereUniqueWithoutUserInput[] | LockerSessionUpsertWithWhereUniqueWithoutUserInput
}

export interface UserUpdateInput {
  name?: String
  email?: String
  password?: String
  credit?: Int
  sessions?: LockerSessionUpdateManyWithoutUserInput
}

export interface LockerClusterWhereUniqueInput {
  id?: ID_Input
  macAddress?: String
}

export interface LockerUpdateWithWhereUniqueWithoutClusterInput {
  where: LockerWhereUniqueInput
  data: LockerUpdateWithoutClusterDataInput
}

export interface UserUpdateOneWithoutSessionsInput {
  create?: UserCreateWithoutSessionsInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutSessionsDataInput
  upsert?: UserUpsertWithoutSessionsInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface LockerPreviousValues {
  id: ID_Output
  busy: Boolean
  locked: Boolean
  open: Boolean
  alarm?: Boolean
  sensorPin: Int
  alarmPin: Int
  lockPin: Int
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface LockerSessionSubscriptionPayload {
  mutation: MutationType
  node?: LockerSession
  updatedFields?: String[]
  previousValues?: LockerSessionPreviousValues
}

export interface LockerSubscriptionPayload {
  mutation: MutationType
  node?: Locker
  updatedFields?: String[]
  previousValues?: LockerPreviousValues
}

export interface LockerCluster extends Node {
  id: ID_Output
  lockers?: Locker[]
  macAddress: String
}

export interface AggregateLocker {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface LockerConnection {
  pageInfo: PageInfo
  edges: LockerEdge[]
  aggregate: AggregateLocker
}

export interface BatchPayload {
  count: Long
}

/*
 * An edge in a connection.

 */
export interface LockerSessionEdge {
  node: LockerSession
  cursor: String
}

export interface User extends Node {
  id: ID_Output
  name: String
  email: String
  password: String
  credit: Int
  sessions?: LockerSession[]
}

export interface AggregateLockerCluster {
  count: Int
}

export interface Locker extends Node {
  id: ID_Output
  cluster?: LockerCluster
  busy: Boolean
  locked: Boolean
  open: Boolean
  alarm?: Boolean
  sensorPin: Int
  alarmPin: Int
  lockPin: Int
}

/*
 * A connection to a list of items.

 */
export interface LockerClusterConnection {
  pageInfo: PageInfo
  edges: LockerClusterEdge[]
  aggregate: AggregateLockerCluster
}

export interface LockerSessionPreviousValues {
  id: ID_Output
  state: Int
  startedAt: DateTime
  finishedAt?: DateTime
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * An edge in a connection.

 */
export interface LockerEdge {
  node: Locker
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface LockerSessionConnection {
  pageInfo: PageInfo
  edges: LockerSessionEdge[]
  aggregate: AggregateLockerSession
}

export interface LockerClusterPreviousValues {
  id: ID_Output
  macAddress: String
}

export interface LockerClusterSubscriptionPayload {
  mutation: MutationType
  node?: LockerCluster
  updatedFields?: String[]
  previousValues?: LockerClusterPreviousValues
}

export interface LockerSession extends Node {
  id: ID_Output
  user: User
  locker: Locker
  state: Int
  startedAt: DateTime
  finishedAt?: DateTime
}

export interface UserPreviousValues {
  id: ID_Output
  name: String
  email: String
  password: String
  credit: Int
}

/*
 * An edge in a connection.

 */
export interface LockerClusterEdge {
  node: LockerCluster
  cursor: String
}

export interface AggregateLockerSession {
  count: Int
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface AggregateUser {
  count: Int
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

export type DateTime = Date | string