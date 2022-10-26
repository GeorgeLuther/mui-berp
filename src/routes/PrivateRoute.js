import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

// Component's children only shown to logged-in users1
export default function PrivateRoute({
  requiredRoles,
  acceptedRoles,
  redirectPath = "/login",
}) {
  const { username, user } = useContext(UserContext);
  // const userRoles = user.roles;
  console.log("pr-userinfo ", user, username);
  console.log("hasUser: " + (!!user ? "yes" : "no"));
  // let output = null;

  // const hasAllRequiredRoles = !requiredRoles ? true : requiredRoles.every((role) =>
  //   userRoles.includes(role)
  // );
  // const hasOneAcceptedRole = !acceptedRoles ? true : userRoles.some((role) =>
  //   acceptedRoles.includes(role)
  // );
  // const meetsBothRequirements = !!hasAllRequiredRoles && !!hasOneAcceptedRole;

  return !!username ? <Outlet /> : <Navigate to={redirectPath} />;

  // const isAllowed =
  //   (!!requiredRoles && !!acceptedRoles && meetsBothRequirements) ||
  //   (!!requiredRoles && !acceptedRoles && hasAllRequiredRoles) ||
  //   (!!acceptedRoles && !requiredRoles && hasOneAcceptedRole);
  // console.log(isAllowed);
  // if (!username) {
  //   return <Navigate to={redirectPath} />;
  // } else if (!!requiredRoles && !!acceptedRoles && meetsBothRequirements) {
  //   return <Outlet />;
  // } else if (!!requiredRoles && !acceptedRoles && hasAllRequiredRoles) {
  // } else if (!!acceptedRoles && !requiredRoles && hasOneAcceptedRole) {
  // }
}

//TODO:
//FIX and USE
//   // user.roles MUST include ALL in this array
//   const isRequiredMatch = user.roles.includes(requiredRoles);

//   // user.roles MUST include AT LEAST ONE in this array

//   const isAcceptedIncluded = user.roles.some((role) =>
//     acceptedRoles.includes(v)
//   );

// const myRequired = ["cracker", "cheese"];
// const myRoles = ["cheese", "cracker", "abc", "cde"];

// const areUserRolesAccepted = myRoles.map((role) => {
//   let res = false;
//   if (!!myRequired.includes(role)) {
//     res = true;
//   }
//   return res;
// });
// const hasOneRole = areUserRolesAccepted.includes(true);

// console.log(myRoles.includes(myRequired));
// console.log(myRoles.some((role) => myRequired.includes(role)));

// console.log(hasOneRole);

// if (requiredRoles !== null && acceptedRoles !== null) {
//   return !!username && hasOneAcceptedRole && hasAllRequiredRoles ? (
//     <Outlet />
//   ) : (
//     <Navigate to={redirectPath} />
//   );
// }

// const chicken = null
// console.log

// const userRoles = ["admin", "monger"];
// const requiredRoles = ["admin", "monger"];
// const acceptedRoles = null;

// const hasAllRequiredRoles = !requiredRoles
//   ? true
//   : requiredRoles.every((role) => userRoles.includes(role));
// const hasOneAcceptedRole = !acceptedRoles
//   ? true
//   : userRoles.some((role) => acceptedRoles.includes(role));
// const meetsBothRequirements = !!hasAllRequiredRoles && !!hasOneAcceptedRole;

// const isAllowed =
//   (!!requiredRoles && !!acceptedRoles && meetsBothRequirements) ||
//   (!!requiredRoles && !acceptedRoles && hasAllRequiredRoles) ||
//   (!!acceptedRoles && !requiredRoles && hasOneAcceptedRole);
// console.log(isAllowed);
