import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    lockerClusters: <T = LockerCluster[]>(args: { where?: LockerClusterWhereInput, orderBy?: LockerClusterOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    lockers: <T = Locker[]>(args: { where?: LockerWhereInput, orderBy?: LockerOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    lockerCluster: <T = LockerCluster | null>(args: { where: LockerClusterWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    locker: <T = Locker | null>(args: { where: LockerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    lockerClustersConnection: <T = LockerClusterConnection>(args: { where?: LockerClusterWhereInput, orderBy?: LockerClusterOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    lockersConnection: <T = LockerConnection>(args: { where?: LockerWhereInput, orderBy?: LockerOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLockerCluster: <T = LockerCluster>(args: { data: LockerClusterCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLocker: <T = Locker>(args: { data: LockerCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateLockerCluster: <T = LockerCluster | null>(args: { data: LockerClusterUpdateInput, where: LockerClusterWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateLocker: <T = Locker | null>(args: { data: LockerUpdateInput, where: LockerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteLockerCluster: <T = LockerCluster | null>(args: { where: LockerClusterWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteLocker: <T = Locker | null>(args: { where: LockerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLockerCluster: <T = LockerCluster>(args: { where: LockerClusterWhereUniqueInput, create: LockerClusterCreateInput, update: LockerClusterUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLocker: <T = Locker>(args: { where: LockerWhereUniqueInput, create: LockerCreateInput, update: LockerUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLockerClusters: <T = BatchPayload>(args: { data: LockerClusterUpdateInput, where?: LockerClusterWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLockers: <T = BatchPayload>(args: { data: LockerUpdateInput, where?: LockerWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLockerClusters: <T = BatchPayload>(args: { where?: LockerClusterWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLockers: <T = BatchPayload>(args: { where?: LockerWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    lockerCluster: <T = LockerClusterSubscriptionPayload | null>(args: { where?: LockerClusterSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    locker: <T = LockerSubscriptionPayload | null>(args: { where?: LockerSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  LockerCluster: (where?: LockerClusterWhereInput) => Promise<boolean>
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

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Locker implements Node {
  id: ID!
  cluster(where: LockerClusterWhereInput): LockerCluster
  busy: Boolean!
  locked: Boolean!
  open: Boolean!
}

type LockerCluster implements Node {
  id: ID!
  lockers(where: LockerWhereInput, orderBy: LockerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Locker!]
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
  lockers: LockerCreateManyWithoutClusterInput
}

input LockerClusterCreateOneWithoutLockersInput {
  connect: LockerClusterWhereUniqueInput
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
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
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
  lockers: LockerUpdateManyWithoutClusterInput
}

input LockerClusterUpdateOneWithoutLockersInput {
  connect: LockerClusterWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
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
  lockers_every: LockerWhereInput
  lockers_some: LockerWhereInput
  lockers_none: LockerWhereInput
}

input LockerClusterWhereUniqueInput {
  id: ID
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
  cluster: LockerClusterCreateOneWithoutLockersInput
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

input LockerUpdateInput {
  busy: Boolean
  locked: Boolean
  open: Boolean
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
  createLocker(data: LockerCreateInput!): Locker!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateLockerCluster(data: LockerClusterUpdateInput!, where: LockerClusterWhereUniqueInput!): LockerCluster
  updateLocker(data: LockerUpdateInput!, where: LockerWhereUniqueInput!): Locker
  deleteUser(where: UserWhereUniqueInput!): User
  deleteLockerCluster(where: LockerClusterWhereUniqueInput!): LockerCluster
  deleteLocker(where: LockerWhereUniqueInput!): Locker
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertLockerCluster(where: LockerClusterWhereUniqueInput!, create: LockerClusterCreateInput!, update: LockerClusterUpdateInput!): LockerCluster!
  upsertLocker(where: LockerWhereUniqueInput!, create: LockerCreateInput!, update: LockerUpdateInput!): Locker!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyLockerClusters(data: LockerClusterUpdateInput!, where: LockerClusterWhereInput): BatchPayload!
  updateManyLockers(data: LockerUpdateInput!, where: LockerWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyLockerClusters(where: LockerClusterWhereInput): BatchPayload!
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
  lockers(where: LockerWhereInput, orderBy: LockerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Locker]!
  user(where: UserWhereUniqueInput!): User
  lockerCluster(where: LockerClusterWhereUniqueInput!): LockerCluster
  locker(where: LockerWhereUniqueInput!): Locker
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  lockerClustersConnection(where: LockerClusterWhereInput, orderBy: LockerClusterOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LockerClusterConnection!
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
  locker(where: LockerSubscriptionWhereInput): LockerSubscriptionPayload
}

type User implements Node {
  id: ID!
  name: String!
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
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
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
}

input UserWhereUniqueInput {
  id: ID
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type LockerClusterOrderByInput =   'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type LockerOrderByInput =   'id_ASC' |
  'id_DESC' |
  'busy_ASC' |
  'busy_DESC' |
  'locked_ASC' |
  'locked_DESC' |
  'open_ASC' |
  'open_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export interface LockerClusterWhereUniqueInput {
  id?: ID_Input
}

export interface LockerClusterCreateInput {
  lockers?: LockerCreateManyWithoutClusterInput
}

export interface LockerUpdateWithoutClusterDataInput {
  busy?: Boolean
  locked?: Boolean
  open?: Boolean
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
}

export interface LockerUpdateWithWhereUniqueWithoutClusterInput {
  where: LockerWhereUniqueInput
  data: LockerUpdateWithoutClusterDataInput
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
  lockers_every?: LockerWhereInput
  lockers_some?: LockerWhereInput
  lockers_none?: LockerWhereInput
}

export interface LockerUpdateManyWithoutClusterInput {
  create?: LockerCreateWithoutClusterInput[] | LockerCreateWithoutClusterInput
  connect?: LockerWhereUniqueInput[] | LockerWhereUniqueInput
  disconnect?: LockerWhereUniqueInput[] | LockerWhereUniqueInput
  delete?: LockerWhereUniqueInput[] | LockerWhereUniqueInput
  update?: LockerUpdateWithWhereUniqueWithoutClusterInput[] | LockerUpdateWithWhereUniqueWithoutClusterInput
  upsert?: LockerUpsertWithWhereUniqueWithoutClusterInput[] | LockerUpsertWithWhereUniqueWithoutClusterInput
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

export interface LockerClusterUpdateInput {
  lockers?: LockerUpdateManyWithoutClusterInput
}

export interface LockerClusterUpdateOneWithoutLockersInput {
  connect?: LockerClusterWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
}

export interface UserUpdateInput {
  name?: String
}

export interface LockerUpdateInput {
  busy?: Boolean
  locked?: Boolean
  open?: Boolean
  cluster?: LockerClusterUpdateOneWithoutLockersInput
}

export interface LockerClusterCreateOneWithoutLockersInput {
  connect?: LockerClusterWhereUniqueInput
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

export interface LockerUpsertWithWhereUniqueWithoutClusterInput {
  where: LockerWhereUniqueInput
  update: LockerUpdateWithoutClusterDataInput
  create: LockerCreateWithoutClusterInput
}

export interface UserCreateInput {
  name: String
}

export interface LockerCreateManyWithoutClusterInput {
  create?: LockerCreateWithoutClusterInput[] | LockerCreateWithoutClusterInput
  connect?: LockerWhereUniqueInput[] | LockerWhereUniqueInput
}

export interface LockerCreateWithoutClusterInput {
  busy?: Boolean
  locked?: Boolean
  open?: Boolean
}

export interface LockerCreateInput {
  busy?: Boolean
  locked?: Boolean
  open?: Boolean
  cluster?: LockerClusterCreateOneWithoutLockersInput
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
  cluster?: LockerClusterWhereInput
}

export interface LockerWhereUniqueInput {
  id?: ID_Input
}

export interface UserWhereUniqueInput {
  id?: ID_Input
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

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateLocker {
  count: Int
}

export interface BatchPayload {
  count: Long
}

export interface LockerPreviousValues {
  id: ID_Output
  busy: Boolean
  locked: Boolean
  open: Boolean
}

export interface LockerCluster extends Node {
  id: ID_Output
  lockers?: Locker[]
}

export interface LockerClusterSubscriptionPayload {
  mutation: MutationType
  node?: LockerCluster
  updatedFields?: String[]
  previousValues?: LockerClusterPreviousValues
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
export interface LockerConnection {
  pageInfo: PageInfo
  edges: LockerEdge[]
  aggregate: AggregateLocker
}

export interface AggregateLockerCluster {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface LockerClusterConnection {
  pageInfo: PageInfo
  edges: LockerClusterEdge[]
  aggregate: AggregateLockerCluster
}

export interface LockerSubscriptionPayload {
  mutation: MutationType
  node?: Locker
  updatedFields?: String[]
  previousValues?: LockerPreviousValues
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface LockerClusterPreviousValues {
  id: ID_Output
}

export interface UserPreviousValues {
  id: ID_Output
  name: String
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

export interface User extends Node {
  id: ID_Output
  name: String
}

export interface Locker extends Node {
  id: ID_Output
  cluster?: LockerCluster
  busy: Boolean
  locked: Boolean
  open: Boolean
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
 * An edge in a connection.

 */
export interface LockerClusterEdge {
  node: LockerCluster
  cursor: String
}

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number