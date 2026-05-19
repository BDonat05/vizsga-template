import { NavLink } from "react-router";

export default function Navbar() {
  type route = {
    name: string
    path: string
  }

  const routes: Array<route> = [
    { name: "home", path: "/" },
    { name: "sub page", path: "/subpage" }
  ]

  return (
    <div className="w-screen min-h-10 flex gap-3 justify-center text-lg bg-blue-900 items-center">
      {routes.map(r => <NavLink to={r.path} className={({ isActive }) => isActive ? "text-blue-300" : "text-black"}>{r.name}</NavLink>)}
    </div>
  )
}
