import React from "react";

function NavBar() {
  return (
    <div className="navbar bg-base-200 rounded border-b-2">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Fnac - Music</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Nom album ..."
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar bg-white"
          >
            <div className="w-10 rounded-full"></div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            {/* TODO : AuthProfileMenu using session (logout | login + register) */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
