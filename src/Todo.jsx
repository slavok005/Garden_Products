// import React from 'react'

// const Todo = ({item, index, removeTodo}) => {
//   return (
//     <div className="item">
//         <div className="item__body">
//             <span><b>{index}.</b> {item.label}</span>
//             <div>
//                 <button className="btn">Edit</button>
//                 <button className="btn" onClick={removeTodo}>X</button>
//             </div>
//         </div>
//         <div className="item__tags">
//             <ul className='tags'>
//                 {
//                     item.tags && item.tags.map(tag => (<li key={tag.id} className='tags__item'>{tag.name}</li>))
//                 }
//             </ul>

//             <button className='btn'>ADD</button>
//         </div>
//     </div>
//   )
// }

// export default Todo