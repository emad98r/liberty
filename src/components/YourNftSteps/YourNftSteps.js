import './YourNftSteps.scss'



const YourNftSteps = (props) => {
  return (

    <div className='step'>
      <div className='img-bg'>{props.img}</div>
      <h4>{props.title}</h4>
      <p>{props.text}</p>
    </div>


  )
}

export default YourNftSteps