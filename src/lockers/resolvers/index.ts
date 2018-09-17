import { lockerQuery } from "~/lockers/resolvers/mutation";
import { lockerMutation } from "~/lockers/resolvers/query";

export const lockersResolvers = {
  Query: lockerQuery,
  Mutation: lockerMutation,
}