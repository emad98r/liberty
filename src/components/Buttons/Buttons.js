import './Buttons.scss'

const MainButton = (props) => {
  return (
    <button className='main-but'>{props.label}</button>
  )
}
const SubButton = (props) => {
  return (
    <button className='sub-but'>{props.label}</button>
  )
}

export default MainButton
export { SubButton }; 