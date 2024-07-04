import { Navigate } from "react-router-dom";
import { FulllayoutMain } from "./Layout";
// import Error from "../Error";
import Login from "../../components/Login";
import Basic from "../Authentication/Signup/Basic";
import Contact from "../Authentication/Signup/Contact";
import Language from "../Authentication/Signup/Language";
import Security from "../Authentication/Signup/Security";
import Singup from "../Authentication/Signup/Signup";
import StepperForm from "../Authentication/Signup/StepperFrom";
import Location from "../Authentication/Signup/Location";
import MedicalStaff from "../Authentication/Signup/MedicalStaff";
import Procedures from "../Authentication/Signup/Procedures";
import Summary from "../Authentication/Signup/Summary";
import Welcome from "../Authentication/Signup/Welcome";
export const ThemeRoutes = [
  {
    path: "/",
    element: <FulllayoutMain />,
    children: [
      { path: "/", exact: true, element: <Navigate to="Login" /> },
      { path: "Login", exact: true, element: <Login /> },
       {
        path: "Stepper", exact: true, element: <Singup />,
        children: [
          { path: "Form", element: <StepperForm /> },
          { path: "Security", exact: true, element: <Security /> },
          { path: "Contact", element: <Contact /> },
          { path: "Language", element: <Language /> },
          { path: "Location", element: <Location /> },
          { path: "Welcome", element: <Welcome /> },
          { path: "MedicalStaff", element: <MedicalStaff /> },
          { path: "Procedures", element: <Procedures /> },
          { path: "Summary", element: <Summary /> },
          { path: "Basic",exact:true, element: <Basic /> },
          // { path: "*", element: <Error /> },
        ],
      },
      
    ],
  },
];

// routingcallauth provide the functionlity of routes

// export const ThemeRoutes=[ //array of objects auth pages routes:
//     {
//       path:"/",
//       element:<FulllayoutMain />,
//       children:[
//         {path:"/", exact:true, element:<Navigate to="Login"/>},
//         {path:"login", exact:true, element:<SignIn/>},
//         // {path:"signup", element:<SignUp />},
//         {path:"*", element:<Error />}
//       ],
//     },
// ];
