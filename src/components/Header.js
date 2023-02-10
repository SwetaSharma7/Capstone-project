import React from 'react';

const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='header'>
			<h1>Notes</h1>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='save'
			>
				Toggle Mode
			</button>
		</div>
	);
};

export default Header;







// import React from "react";

// export default function Header(props) {
//   return (
//     <nav
//       className={`header header-expand-lg header-$(props.mode) bg-$(props.mode)`}
//     >
//       <div className="container-fluid">
//         <a className="header-brand" href="/">
//           {props.title}
//         </a>
//         <button
//           className="header-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#headerSupportedContent"
//           aria-controls="headerSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="header-toggler-icon"></span>
//         </button>
//         <div className="collapse header-collapse" id="headerSupportedContent">
//           <ul className="header-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="/">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/">
//                 About
//               </a>
//             </li>
//           </ul>

//           <div
//             className={`form-check form-switch text-${
//               props.mode === "light" ? "dark" : "light"
//             }`}
//           >
//             <input
//               className="form-check-input"
//               onClick={props.toggleMode}
//               type="checkbox"
//               id="flexSwitchCheckDefault"
//             />
//             <label
//               className="form-check-label"
//               htmlFor="flexSwitchCheckDefault"
//             >
//               Enable DarkMode
//             </label>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }


// Header.propTypes = {
//   title: 'PropTypes.string.isRequired',
//   aboutText: 'PropTypes.string',
// }

// Header.defaultProps = {
//   title: 'Ste title here',
//   aboutText: 'About text here'
// };
