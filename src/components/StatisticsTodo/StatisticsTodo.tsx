import React from "react";
import { useSelector } from "react-redux";
import s from "./StatisticsTodo.module.css";
import {
  getCategorySelectValueState,
  getTodoValueState,
} from "../../redux/selectors";

interface TodoItem {
  id: string;
  name: string;
  created: string;
  category: string;
  content: string;
  date: string[];
  archive: boolean;
}

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
          categoryList.map((category: string) => {
            const filteredItems = items.filter(
              (item: TodoItem) => item.category === category
            );
            return (
              <tr key={category} className={s.tr}>
                <td className={s.td}>{category}</td>
                <td className={s.td}>
                  {
                    filteredItems.filter((item: TodoItem) => !item.archive)
                      .length
                  }
                </td>
                <td className={s.td}>
                  {
                    filteredItems.filter((item: TodoItem) => item.archive)
                      .length
                  }
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default StatisticsTodo;
