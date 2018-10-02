import { lockerQuery } from "~/lockers/resolvers/query";
import { lockerMutation } from "~/lockers/resolvers/mutation";
import { lockerSubscriptions } from "~/auth/resolvers/subscriptions";

export const resolvers = {
  Query: {
    ...lockerQuery
  },
  Mutation: {
    ...lockerMutation,
  },
  Subscription: {
    ...lockerSubscriptions,
  },
};
