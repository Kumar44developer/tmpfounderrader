declare module 'next/cache' {
  export { unstable_cache } from 'next/dist/server/web/spec-extension/unstable-cache'
  export {
    updateTag,
    revalidateTag,
    revalidatePath,
    refresh,
  } from 'next/dist/server/web/spec-extension/revalidate'
  export { unstable_noStore } from 'next/dist/server/web/spec-extension/unstable-no-store'
  export { io } from 'next/dist/server/request/io'

    export function cacheLife(profile: "default"): void

    export function cacheLife(profile: "seconds"): void

    export function cacheLife(profile: "minutes"): void

    export function cacheLife(profile: "hours"): void

    export function cacheLife(profile: "weeks"): void

    export function cacheLife(profile: "max"): void

    export function cacheLife(profile: {
      /**
       * This cache may be stale on clients for ... seconds before checking with the server.
       */
      stale?: number,
      /**
       * If the server receives a new request after ... seconds, start revalidating new values in the background.
       */
      revalidate?: number,
      /**
       * If this entry has no traffic for ... seconds it will expire. The next request will recompute it.
       */
      expire?: number
    }): void
  
