import "./Button.css";
/*Bai tap 2 */
// function Button({ type, children }) {
//   return (
//     <button className={`btn btn-${type}`}>
//       {children}
//     </button>
//   );
// }
/*Bai tap 3 */
function Button({ type, children, onClick }) {
  return (
    <button className={`btn btn-${type}`} onClick={onClick}>{children}</button>
  );
}

export default Button;
