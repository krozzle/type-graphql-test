import { Resolver, Mutation, Arg } from 'type-graphql';
import { User } from '../../entity/User';
import { redis } from '../../redis';

@Resolver()
export class ConfirmUserResolver {
  @Mutation(() => Boolean)
  async confirmUser(@Arg('token') token: string): Promise<boolean> {
    const userId = await redis.get(token);

    if (!userId) {
      return false;
    }

    await User.update({ id: parseInt(userId, 10) }, { confirmed: true });
    // token will only be used once by user, so delete it afterwards
    redis.del(token);
    return true;
  }
}
