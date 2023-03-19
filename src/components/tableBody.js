// import { useEffect, useReducer, useState } from "react";
// import { initialProducts } from "../initialProducts";
// import { qtyReducer } from "../reducers/qtyReducer";
// import { styles } from "../utils/appStyles";

// export default function TableBody() {
//   const [productState, dispatch] = useReducer(qtyReducer, initialProducts);
//   const [total, setTotal] = useState(0);

//   function incrementQty(id) {
//     console.log("increasing");
//     console.log(id);
//     dispatch({
//       type: "increment_qty",
//       id: id
//     });
//   }

//   function decrementQty(id) {
//     console.log("decreasing");
//     // console.log(id);
//     dispatch({
//       type: "decrement_qty",
//       id: id
//     });
//   }

//   function handleDelete(productId) {
//     console.log(productId);
//     dispatch({
//       type: "delete",
//       id: productId
//     });
//   }

//   useEffect(() => {
//     const totalSum = productState.reduce(
//       (accumulator, currentValue) =>
//         accumulator + currentValue.qty * currentValue.price,
//       0
//     );
//     setTotal(totalSum.toFixed(2));
//   }, [productState]);

//   return (
//     <tbody>
//       {productState.map((item, index) => {
//         return (
//           <tr key={index}>
//             <td>
//               <img style={styles.imgStyle} src={item.imgSrc} alt="" />
//             </td>
//             <td>{item.productName}</td>
//             <td>
//               <span
//                 style={styles.changeQtyStyle}
//                 onClick={() => decrementQty(item.productId)}
//               >
//                 {" "}
//                 &#60;{" "}
//               </span>
//               {item.qty}
//               <span
//                 style={styles.changeQtyStyle}
//                 onClick={() => incrementQty(item.productId)}
//               >
//                 {" "}
//                 &#62;
//               </span>
//             </td>
//             <td>${item.price}</td>
//             <td>
//               <p
//                 onClick={() => {
//                   handleDelete(index);
//                 }}
//               >
//                 X
//               </p>
//             </td>
//           </tr>
//         );
//       })}
//     </tbody>
//   );
// }
