/* eslint-disable @typescript-eslint/no-unused-vars */
declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: string;
    readonly NEXT_PUBLIC_BASE_URL: string;
  }
}
