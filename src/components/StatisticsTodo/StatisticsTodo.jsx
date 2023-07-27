import React from "react";
import s from "./StatisticsTodo.module.css";

function StatisticsTodo({ items, categorySelect }) {
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
          categorySelect.map((el) => {
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
