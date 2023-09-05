import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: false },
  { id: 3, title: 'wrwerewr', seen: false },
  { id: 4, title: 'Tfghgfhfgh', seen: false },
];

function App() {
  const [list, setList] = useState(initialList);

  const onToggle = (id, nextSeen) => {
    console.log(id);
    setList(
      list.map((val) => {
        if (val.id === id) {
          return { ...val, seen: nextSeen };
        } else {
          return val;
        }
      })
    );
  };

  const handleDeleteItem = (itemId) => {
    console.log(itemId);
    setList(
      list.filter((el) => {
        return el.id !== itemId;
      })
    );
  };

  return (
    <ul>
      {list.length &&
        list.map((item) => (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.seen}
                onChange={(e) => {
                  onToggle(item.id, e.target.checked);
                }}
              />
              {item.title}
            </label>
            {item.seen && (
              <button onClick={() => handleDeleteItem(item.id)}>
                Delete item
              </button>
            )}
          </li>
        ))}
    </ul>
  );
}

export default App;
