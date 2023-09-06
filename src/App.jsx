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

const countries = [
  {
    name: 'India',
    value: 'In',
    cities: ['Deli', 'Mumbai'],
  },
  {
    name: 'Pakistan',
    value: 'Pk',
    cities: ['Karachi', 'Lashore'],
  },
  {
    name: 'Bangladesh',
    value: 'Bg',
    cities: ['Dakka', 'Chikkagong'],
  },
];

function App() {
  const [list, setList] = useState(initialList);
  const [country, setCountry] = useState(0);

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

  const handleDeleteItem = (item) => {
    console.log(itemId);
    setList(
      list.filter((el) => {
        return el.id !== itemId;
      })
    );
  };
  // console.log(country);
  const onChangeCountry = (itemId) => {
    console.log(itemId);
    setCountry(itemId);
  };

  return (
    <>
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
      <select onChange={(e) => onChangeCountry(e.target.value)}>
        {countries.map((country, index) => (
          <option key={country.value} value={index}>
            {country.name}
          </option>
        ))}
      </select>

      <select>
        {countries[country].cities.map((el) => (
          <option key={el}>{el}</option>
        ))}
      </select>
    </>
  );
}

export default App;
