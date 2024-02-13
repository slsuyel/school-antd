// import { useState } from "react";

// const SearchBox = ({ placeholder }) => {
//   const [searchValue, setSearchValue] = useState("");

//   const formStyle = {
//     position: "relative",
//   };

//   const searchIconStyle = {
//     position: "absolute",
//     top: "20px",
//     left: "20px",
//     color: "#9ca3af",
//   };

//   const micIconStyle = {
//     position: "absolute",
//     right: "0px",
//     top: "0px",
//     padding: "17px 11px 12px 11px",
//     borderLeft: "1px solid rgb(209, 213, 219)",
//     borderRadius: "0px 6px 9px 0",
//     border: "1px solid #1ea5ba",
//   };

//   const leftPanStyle = {
//     paddingLeft: "7px",
//   };

//   const formInputStyle = {
//     height: "55px",
//     textIndent: "33px",
//     borderRadius: "10px",
//   };

//   const focusStyle = {
//     boxShadow: "none",
//     border: "none",
//   };

//   const handleClick = () => {
//     console.log("Form field value:", searchValue);
//   };

//   const handleChange = (e) => {
//     setSearchValue(e.target.value);
//   };

//   return (
//     <div className="justify-content-end mx-auto row mb-3">
//       <div className="col-md-4">
//         <div style={{ ...formStyle }} className="form">
//           <i style={{ ...searchIconStyle }} className="fa fa-search"></i>
//           <input
//             style={{ ...formInputStyle, ...focusStyle }}
//             type="text"
//             className="form-control form-input"
//             placeholder={placeholder ? placeholder : "Search something . . ."}
//             value={searchValue}
//             onChange={handleChange}
//           />
//           <span
//             style={{ ...micIconStyle, ...leftPanStyle }}
//             className="left-pan btn btn-warning"
//             onClick={handleClick}
//           >
//             Go
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchBox;
import React, { useState, ChangeEvent, CSSProperties } from "react";

interface SearchBoxProps {
  placeholder?: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({ placeholder }) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const formStyle: CSSProperties = {
    position: "relative",
  };

  const searchIconStyle: CSSProperties = {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "#9ca3af",
  };

  const micIconStyle: CSSProperties = {
    position: "absolute",
    right: "0px",
    top: "0px",
    padding: "17px 11px 12px 11px",
    // borderLeft: "1px solid rgb(209, 213, 219)",
  };

  const leftPanStyle: CSSProperties = {
    paddingLeft: "7px",
  };

  const formInputStyle: CSSProperties = {
    height: "55px",
    textIndent: "33px",
  };

  const focusStyle: CSSProperties = {
    boxShadow: "none",
    border: "none",
  };

  const handleClick = () => {
    console.log("Form field value:", searchValue);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="justify-content-end mx-auto row mb-3">
      <div className="col-md-4 ">
        <div style={formStyle} className="form border rounded">
          <i style={searchIconStyle} className="fa fa-search"></i>
          <input
            style={{ ...formInputStyle, ...focusStyle }}
            type="text"
            className="form-control form-input"
            placeholder={placeholder ? placeholder : "Search something . . ."}
            value={searchValue}
            onChange={handleChange}
          />
          <span
            style={{ ...micIconStyle, ...leftPanStyle }}
            className="left-pan btn btn-warning rounded-start-0"
            onClick={handleClick}
          >
            Go
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
