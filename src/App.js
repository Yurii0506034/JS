import React from 'react';

class App extends React.Component {
  // Завдання 10
  getText() {
    return '<p>текст</p>';
  }

  // Завдання 11
  getNum1() {
    return 1;
  }

  getNum2() {
    return 2;
  }

  render() {
    // Завдання 2, 3, 4
    const text = 'текст';
    const htmlText = '<p>текст</p>';
    const text1 = '<p>текст1</p>';
    const text2 = '<p>текст2</p>';

    // Завдання 5, 6
    const attr = 'block';
    const str = 'block';

    // Завдання 7
    const divStyle = {
      color: 'green',
      border: '1px solid green',
      borderRadius: '30px',
      padding: '10px'
    };

    // Завдання 8
    const show = true; // змінити на false для перевірки

    // Завдання 9
    const arr = ['a', 'b', 'c', 'd', 'e'];

    // Завдання 11
    const sum = this.getNum1() + this.getNum2();

    return (
      <div>

        {/* ✅ Завдання 1 */}
        <div>текст</div>

        {/* ✅ Завдання 2 */}
        <div>{text}</div>

        {/* ✅ Завдання 3 */}
        <div dangerouslySetInnerHTML={{ __html: htmlText }} />

        {/* ✅ Завдання 4 */}
        <div>
          <div dangerouslySetInnerHTML={{ __html: text1 }} />
          <p>!!!</p>
          <div dangerouslySetInnerHTML={{ __html: text2 }} />
        </div>

        {/* ✅ Завдання 5 */}
        <div id={attr}>текст</div>

        {/* ✅ Завдання 6 */}
        <div className={str}>текст</div>

        {/* ✅ Завдання 7 */}
        <div style={divStyle}>текст</div>

        {/* ✅ Завдання 8 */}
        <div>{show ? 'текст 1' : 'текст 2'}</div>

        {/* ✅ Завдання 9 */}
        <ul>
          {arr.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* ✅ Завдання 10 */}
        <div dangerouslySetInnerHTML={{ __html: this.getText() }} />

        {/* ✅ Завдання 11 */}
        <div>текст {sum}</div>
        
      </div>
    );
  }
}

export default App;
