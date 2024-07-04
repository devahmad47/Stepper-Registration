// import React from "react";
// import { Link, useLocation } from "react-router-dom";

// export const Stepper = () => {

//     const location = useLocation();
//     function classNames(...classes) {
//         return classes.filter(Boolean).join(' ')
//     }
//     return (<div>
//         {/* <!-- Stepper --> */}

//         <ul className="relative mt-8 flex flex-row gap-x-2" >
//             {/* <!-- Item --> */}
//             <li className="shrink basis-0 flex-1 group" >
//                 <div className="min-w-7 min-h-7 w-full inline-flex items-center text-xs align-middle">
//                     <Link
//                         to="/SignUp/Basic"
//                         className={classNames(location.pathname === '/SignUp/Basic' ? 'bg-[#E7298F] border-[#E7298F]' : 'opacity-25', "lg:size-12  md:size-12 size-8 flex justify-center items-center flex-shrink-0 bg-[#E7298F] border-[#E7298F] font-medium  rounded-full  dark:text-white ")}
//                     >
//                         1
//                     </Link>
//                     <div className={classNames(location.pathname === '/SignUp/Basic' ? '' : 'opacity-25', "ms-2 w-full  h-px flex-1  group-last:hidden bg-[#E7298F] ")}></div>
//                 </div>
//                 <div className="mt-3">
//                     <span className={classNames(location.pathname === '/SignUp/Basic' ? '' : 'opacity-25', "block text-sm  font-medium text-[#E7298F] ")}>
//                         Basic Information
//                     </span>
//                 </div>
//             </li>
//             {/* <!-- End Item --> */}

//             {/* <!-- Item --> */}
//             <li className="shrink basis-0 flex-1 group">
//                 <div className="min-w-7 min-h-7 w-full inline-flex items-center text-xs align-middle">
//                     <Link to={"/SignUp/Contact"} className={classNames(location.pathname === '/SignUp/Contact' ? 'bg-[#E7298F] border-[#E7298F]' : 'opacity-25', "lg:size-12  md:size-12 size-8 flex justify-center items-center flex-shrink-0 bg-[#E7298F] border-[#E7298F] font-medium  rounded-full  dark:text-white ")}>
//                         2
//                     </Link>
//                     <div className={classNames(location.pathname === '/SignUp/Contact' ? '' : 'opacity-25', "ms-2 w-full  h-px flex-1  group-last:hidden bg-[#E7298F] ")}></div>
//                 </div>
//                 <div className="mt-3">
//                     <span className={classNames(location.pathname === '/SignUp/Contact' ? '' : 'opacity-25', "block text-sm  font-medium text-[#E7298F] ")}>
//                         Contact & Address
//                     </span>
//                 </div>
//             </li>
//             {/* <!-- End Item --> */}

//             {/* <!-- Item --> */}
//             <li className="shrink basis-0 flex-1 group">
//                 <div className="min-w-7 min-h-7 w-full inline-flex items-center text-xs align-middle">
//                     <Link to={"/SignUp/Role"}

//                         className={classNames(location.pathname === '/SignUp/Role' ? '' : 'opacity-25', "lg:size-12  md:size-12 size-8 flex justify-center items-center flex-shrink-0 bg-[#E7298F] border-[#E7298F] font-medium  rounded-full dark:text-white ")}

//                     >
//                         3
//                     </Link>
//                     <div className={classNames(location.pathname === '/SignUp/Role' ? '' : 'opacity-25', "ms-2 w-full  h-px flex-1  group-last:hidden bg-[#E7298F] ")}></div>
//                 </div>
//                 <div className="mt-3">
//                     <span
//                         className={classNames(location.pathname === '/SignUp/Role' ? '' : 'opacity-25', "block text-sm  font-medium text-[#E7298F] ")}

//                     >
//                         Admin Role <br /> Information
//                     </span>
//                 </div>
//             </li>
//             {/* <!-- End Item --> */}
//             {/* <!-- Item --> */}
//             <li className="shrink basis-0 flex-1 group">
//                 <div className="min-w-7 min-h-7 w-full inline-flex items-center text-xs align-middle">
//                     <Link to={"/SignUp/Security"}

//                         className={classNames(location.pathname === '/SignUp/Security' ? '' : 'opacity-25', "lg:size-12  md:size-12 size-8 flex justify-center items-center flex-shrink-0 bg-[#E7298F] border-[#E7298F] font-medium  rounded-full  dark:text-white ")}
//                     >
//                         4
//                     </Link>
//                     <div className={classNames(location.pathname === '/SignUp/Security' ? '' : 'opacity-25', "ms-2 w-full  h-px flex-1  group-last:hidden bg-[#E7298F] ")}></div>
//                 </div>
//                 <div className="mt-3 ">
//                     <span className={classNames(location.pathname === '/SignUp/Security' ? '' : 'opacity-25', "block text-sm  font-medium text-[#E7298F] ")}>
//                         Security & Privacy
//                     </span>
//                 </div>
//             </li>
//             {/* <!-- End Item --> */}
//         </ul>
//     </div>)
// }