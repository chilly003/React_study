import { useState } from "react";

export default function Login() {
  //보통 useState를 이메일용, 패스워드 용으로 나누지만 같이 할 수도 있다.
  const [enterValues, setEnterValues] = useState({
    email: '',
    password: ''
  })

  function handleSubmit(event) {
    event.preventDefault()
    console.log("summit")
  }
  
  function handleInputChange(identifier, value) {
    //({})에 소괄호는 함수가 아니라 객체로 만들겠다는 의미이다.
    setEnterValues(prevValues => ({
      ...prevValues,
      [identifier]: value  
      //대괄호 사이에 속성 이름을 보유하고 있는 변수나 매개변수를 입력한다.
      //그래야 매개변수에 저장된 속성을 자유롭게 설정 가능.
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
          id="email" 
          type="email" 
          name="email" 
          onChange={(event) => handleInputChange('email', event.target.value)} 
          //리액트에서는 함수를 그냥 실행하면 identifier, value값을 안줌. 그래서 익명 함수로 한번더 실행
          //그리고 함수에 identifier-식별문, value-쓰여진 값을 넘겨준다.
          value={enterValues.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
          id="password" 
          type="password" 
          name="password" 
          onChange={(event) => handleInputChange('password', event.target.value)} 
          value={enterValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
