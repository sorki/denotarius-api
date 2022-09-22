import { joinGlobs } from 'https://deno.land/std@0.155.0/path/mod.ts';

import { BLOCKFROST_MAINNET_TOKEN, BLOCKFROST_MAINNET_URL } from '../constants.ts';

export const getAddressBalance = async (address: string): Promise<number> => {
  const addressData = await fetch(joinGlobs([BLOCKFROST_MAINNET_URL, 'addresses', address]), {
    headers: {
      project_id: BLOCKFROST_MAINNET_TOKEN,
    },
  });

  console.log('addressData', addressData);

  return 5;
};