import React from "react";
import s from "./Header.module.css";
function Header() {
  const items = [
    {
      id: 1,
      name: "Shopping List",
      created: "APril 20",
      category: "Task",
      content: "tomatos",
      date: "date",
      archive: "false",
      edit: "false",
      delete: "false",
    },
    {
      id: 2,
      name: "The teory evolute",
      created: "APril 20",
      category: "Task",
      content: "drink",
      date: "date",
      archive: "false",
      edit: "false",
      delete: "false",
    },
    {
      id: 3,
      name: "book it ",
      created: "APril 20",
      category: "Task",
      content: "tomatos",
      date: "date",
      archive: "false",
      edit: "false",
      delete: "false",
    },
  ];
  return (
    <>
      <div className={s.div}>
        <div>
          <table className={s.table}>
            <thead className={s.thead}>
              <tr>
                <th>Name</th>
                <th>Created</th>
                <th>Category</th>
                <th>Content</th>
                <th>Dates</th>
                <th>Edit</th>
                <th>Arvice</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {items &&
                items.map((e) => {
                  return (
                    <tr key={e.id}>
                      <td>{e.name}</td>
                      <td>{e.created}</td>
                      <td>{e.category}</td>
                      <td>{e.content}</td>
                      <td>{e.date}</td>
                      <td>
                        <button type="button" className={s.btnEdit}>edit</button>
                      </td>
                      <td>
                        <button type="button" className={s.btnEdit}>
                          archive
                        </button>
                      </td>
                      <td>
                        <button type="button" className={s.btnDelete}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <button>
          create new note
        </button>
      </div>
    </>
  );
}

export default Header;
