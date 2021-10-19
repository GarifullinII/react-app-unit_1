import './App.css';

let text = 'test variable';

function App() {

    let text2 = '222';

    const style = {
        fontSize: '24px',
        fontStyle : 'italic',
        color: 'red'
    };

  return (
      <>
          <div>
              <h1 style={style}>
                  app_1
              </h1>
              <img src="/images/cart.svg" alt="cart"/>
              <ul>
                  <li>Hello</li>
                  <li>{text+text2}</li>
              </ul>
          </div>
      </>
  );
}

export default App;
