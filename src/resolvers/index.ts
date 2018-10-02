import { lockerQuery } from "~/lockers/resolvers/query";
import { lockerMutation } from "~/lockers/resolvers/mutation";
import { lockerSubscriptions } from "~/auth/resolvers/subscriptions";
import { authQuery } from "~/auth/resolvers/query";
import { authMutation } from "~/auth/resolvers/mutation";

export const resolvers = {
  Query: {
    ...lockerQuery,
    ...authQuery,
  },
  Mutation: {
    ...lockerMutation,
    ...authMutation,
  },
  Subscription: {
    ...lockerSubscriptions,
  },
};
