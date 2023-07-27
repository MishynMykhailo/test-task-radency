import React from "react";
import { useSelector } from "react-redux";
import s from "./StatisticsTodo.module.css";
import {
  getCategorySelectValueState,
  getTodoValueState,
} from "../../redux/selectors";

function StatisticsTodo() {
  const { items } = useSelector(getTodoValueState);
  const { categoryList } = useSelector(getCategorySelectValueState);
  return (
    <table className={s.table}>
      <thead className={s.thead}>
        <tr className={s.tr}>
          <th className={s.th}>Note Category</th>
          <th className={s.th}>Active</th>
          <th className={s.th}>Archived</th>
        </tr>
      </thead>
      <tbody>
        {items &&
          categoryList.map((el) => {
            const filteredItems = items.filter((item) => item.category === el);
            return (
              <tr key={el} className={s.tr}>
                <td className={s.td}>{el}</td>
                <td className={s.td}>
                  {
                    filteredItems.filter(
                      (item) => item.category === el && item.archive === false
                    ).length
                  }
                </td>
                <td className={s.td}>
                  {filteredItems.filter((item) => item.archive === true).length}
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default StatisticsTodo;
