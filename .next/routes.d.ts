type AppRoutes = "/"
type PageRoutes = never
type LayoutRoutes = "/"
type RedirectRoutes = never
type RewriteRoutes = never
type Routes = AppRoutes | PageRoutes | LayoutRoutes | RedirectRoutes | RewriteRoutes

interface ParamMap {
  "/": {}
}

export type ParamsOf<Route extends Routes> = ParamMap[Route]


interface LayoutSlotMap {
  "/": never
}

export type { AppRoutes, PageRoutes, LayoutRoutes, RedirectRoutes, RewriteRoutes, ParamMap }
