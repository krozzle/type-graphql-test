import { v4 } from 'uuid';
import { redis } from '../../redis';
import { confirmUserPrefix } from '../constants/redisPrefixes';

//  token is associated with userId
export const createConfirmationUrl = async (userId: number) => {
  // check if token matches userId
  const token = v4();
  await redis.set(confirmUserPrefix + token, userId, 'ex', 60 * 60 * 24); // 1 day expiration

  return `http://localhost:3000/user/confirm/${token}`;
};
