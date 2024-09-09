import React from "react";
import { useDispatch } from "react-redux";
import { deleteToDo } from "../store";
import { Link } from "react-router-dom";

function ToDo({ text, id }) {
  const dispatch = useDispatch();

  const onDelBtnClick = () => {
    dispatch(deleteToDo(id));
  }

  return (
    <li>
      <Link to={`/${id}`}>
        {text}
      </Link>
      <button onClick={onDelBtnClick}>DEL</button>
    </li>
  )

}

export default ToDo;

// 이전 방식
// function misDispatchToProps(dispatch, ownProps) {
//   return {
//     onDelBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id))
//   };
// }

// export default connect(null, misDispatchToProps)(ToDo);
