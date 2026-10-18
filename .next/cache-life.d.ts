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
