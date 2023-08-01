import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import {
  getArchivePageValueState,
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
interface IProps {
  todoImage: (category: string) => ReactElement;
}
const StatisticsTodo: React.FC<IProps> = ({ todoImage }) => {
  const { items } = useSelector(getTodoValueState);
  const { categoryList } = useSelector(getCategorySelectValueState);
  const { archivePage } = useSelector(getArchivePageValueState);

  return (
    <table>
      <thead className={archivePage ? "bg-gray-500" : "bg-red-500 "}>
        <tr className="text-white">
          <th className="p-4">Note Category</th>
          <th className="p-4">Active</th>
          <th className="p-4">Archived</th>
        </tr>
      </thead>
      <tbody>
        {items &&
          categoryList.map((category: string) => {
            const filteredItems = items.filter(
              (item: TodoItem) => item.category === category,
            );
            return (
              <tr key={category} className="odd:bg-rose-50 even:bg-rose-100">
                <td className="flex p-2">
                  <span className="mr-2">{todoImage(category)}</span>
                  <span>{category}</span>
                </td>
                <td className="text-center">
                  {
                    filteredItems.filter((item: TodoItem) => !item.archive)
                      .length
                  }
                </td>
                <td className="text-center">
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
};

export default StatisticsTodo;
