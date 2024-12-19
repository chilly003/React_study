import logo from '../assets/investment-calculator-logo.png'
// 동적으로 이미지 가져오기기
export default function Header () {
    return (
        <header id="header">
        <img src={logo} alt="logo" />
        <h1>React Investment Calculator</h1>
        </header>
    )
}