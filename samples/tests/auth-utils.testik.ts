// NOT WORKING!!!

import { isOIDC } from '@/server/auth-utils';
import { Account } from 'next-auth';

describe('auth-utils', () => {
  describe('isOIDC', () => {
    it('returns "true" if auth provider is google', () => {
      const result = isOIDC({ provider: 'google' } as Account);
      expect(result).toBe(true);
    })
  })
});
