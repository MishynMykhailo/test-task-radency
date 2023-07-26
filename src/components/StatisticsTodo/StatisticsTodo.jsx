import React from "react";
import s from "./StatisticsTodo.module";

function StatisticsTodo({ items, categorySelect }) {
  return (
    <table className={s.table}>
      <thead className={s.thead}>
        <tr>
          <th>Note Category</th>
          <th>Active</th>
          <th>Archived</th>
        </tr>
      </thead>
      <tbody>
        {items &&
          categorySelect.map((el) => {
            const filteredItems = items.filter((item) => item.category === el);
            return (
              <tr key={el}>
                <td>{el}</td>
                <td>
                  {filteredItems.filter((item) => item.category === el).length}
                </td>
                <td>
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
