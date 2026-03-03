import { Sphere } from '@unicitylabs/sphere-sdk';
import type { PeerInfo } from '@unicitylabs/sphere-sdk';
import { createBrowserProviders } from '@unicitylabs/sphere-sdk/impl/browser';

const WELCOME_TRIGGER = '__sphere_welcome__';
const FAUCET_API_URL = 'https://faucet.unicity.network/api/v1/faucet/request';

export interface SphereSession {
  sphere: Sphere;
  peer: PeerInfo;       // @kbbot
  mikePeer: PeerInfo;   // @mike
}

let initPromise: Promise<SphereSession> | null = null;

function randomNametag(): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let suffix = '';
  for (let i = 0; i < 6; i++) suffix += chars[Math.floor(Math.random() * chars.length)];
  return `pitchdeck-${suffix}`;
}

async function requestFaucet(nametag: string): Promise<void> {
  const coins = [
    { coin: 'unicity', amount: 100 },
    { coin: 'bitcoin', amount: 1 },
    { coin: 'ethereum', amount: 42 },
    { coin: 'tether', amount: 1000 },
  ];

  await Promise.all(
    coins.map(({ coin, amount }) =>
      fetch(FAUCET_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ unicityId: nametag, coin, amount }),
      }).catch(() => {})
    )
  );
}

async function doInit(): Promise<SphereSession> {
  const providers = createBrowserProviders({
    network: 'testnet',
    groupChat: false,
    market: false,
  });

  const exists = await Sphere.exists(providers.storage);

  let sphere: Sphere;

  if (exists) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = await Sphere.init({ ...providers as any, l1: {} });
    sphere = result.sphere;

    // If existing wallet has no tokens yet, request from faucet
    const nametag = sphere.identity?.nametag;
    if (nametag && sphere.payments.getBalance().length === 0) {
      requestFaucet(nametag).then(() => {
        console.log('Faucet top-up sent for existing wallet');
        sphere.payments.receive().catch(() => {});
      });
    }
  } else {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = await Sphere.init({
      ...providers as any,
      autoGenerate: true,
      l1: {},
    });
    sphere = result.sphere;

    // Non-blocking: register nametag, request faucet tokens, send kbbot welcome
    (async () => {
      try {
        const nametag = randomNametag();
        await sphere.registerNametag(nametag);
        console.log(`Registered nametag: @${nametag}`);
        await requestFaucet(nametag);
        console.log('Faucet requests sent');
        await sphere.payments.receive();
        console.log('Tokens received');
      } catch (e) {
        console.warn('Nametag/faucet setup failed:', e);
      }
    })();

    // Fire welcome trigger so kbbot sends a greeting
    if (sphere.identity) {
      sphere.communications
        .sendDM('@kbbot', WELCOME_TRIGGER)
        .catch(() => {});
    }
  }

  // Resolve kbbot and mike in parallel
  const [peer, mikePeer] = await Promise.all([
    sphere.resolve('@kbbot'),
    sphere.resolve('@mike'),
  ]);
  if (!peer) throw new Error('Could not resolve @kbbot');
  if (!mikePeer) throw new Error('Could not resolve @mike');

  return { sphere, peer, mikePeer };
}

/** Start initialization eagerly. Returns the same promise on subsequent calls. */
export function getSphereSession(): Promise<SphereSession> {
  if (!initPromise) {
    initPromise = doInit();
  }
  return initPromise;
}

// Start immediately on module load
getSphereSession().catch((err) => {
  console.warn('Sphere pre-init failed:', err);
});
