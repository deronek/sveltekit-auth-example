import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async (event) => {
  return {
    sessionLazy: event.locals.auth(),
  }
}
