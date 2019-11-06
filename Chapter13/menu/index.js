import { Menu, MenuItem, MenuContent } from "./10";

// until example 02
// const App = () => {
//   return (
//     <Menu>
//       <MenuItem id="main">main</MenuItem>
//       <MenuItem id="account">account</MenuItem>
//       <MenuItem id="logout">logout</MenuItem>
//     </Menu>
//   );
// };

// from example 03
// const App = () => {
//   return (
//     <Menu value="main">
//       <MenuItem id="main">main</MenuItem>
//       <MenuItem id="account">account</MenuItem>
//       <MenuItem id="logout">logout</MenuItem>
//     </Menu>
//   );
// };

// for demonstartion
// const App = () => {
//   return (
//     <Menu value="main">
//       <div style={{ fontSize: 33 }}>
//         <MenuItem id="main">main</MenuItem>
//       </div>
//       <MenuItem id="account">account</MenuItem>
//       <MenuItem id="logout">logout</MenuItem>
//     </Menu>
//   );
// };

// for controlled
// const App = () => {
//   const [value, setValue] = React.useState("main");

//   return (
//     <>
//       <Menu>
//         <MenuItem id="main">main</MenuItem>
//         <MenuItem id="account">account</MenuItem>
//         <MenuItem id="logout">logout</MenuItem>
//       </Menu>
//       <div>---------------------</div>
//       {value === "main" && <div>main</div>}
//       {value === "account" && <div>account</div>}
//       {value === "logout" && <div>logout</div>}
//     </>
//   );
// };

// for last example
const App = () => {
  const [value, setValue] = React.useState("main");

  return (
    <Menu value={value} onChange={setValue}>
      <MenuItem id="main">main</MenuItem>
      <MenuItem id="account">account</MenuItem>
      <MenuItem id="logout">logout</MenuItem>

      <div>---------------------</div>

      <MenuContent id="main">
        <div>main</div>
      </MenuContent>

      <MenuContent id="account">
        <div>account</div>
      </MenuContent>

      <MenuContent id="logout">
        <div>logout</div>
      </MenuContent>
    </Menu>
  );
};

// for uncontrolled
// const App = () => {
//   return (
//     <Menu value="main">
//       <MenuItem id="main">main</MenuItem>
//       <MenuItem id="account">account</MenuItem>
//       <MenuItem id="logout">logout</MenuItem>
//     </Menu>
//   );
// };