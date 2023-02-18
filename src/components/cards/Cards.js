import './Cards.scss'

import { FaGripfire, FaCentos, FaPlayCircle, FaCodeBranch, FaMoneyBillWaveAlt, FaPassport } from "react-icons/fa";



const Cards = () => {
  return (
    <div className='cards-wrapper'>
      <div className='card'>
        <i>
          <FaGripfire />
        </i>
        <h4>Blockchain</h4>
      </div>
      <div className='card'>
        <i>
          <FaCentos />
        </i>
        <h4>Digital Art</h4>
      </div>
      <div className='card'>
        <i>
          <FaPlayCircle />
        </i>
        <h4>Music Art</h4>
      </div>
      <div className='card'>
        <i>
          <FaCodeBranch />
        </i>
        <h4>Virtual World</h4>
      </div>
      <div className='card'>
        <i>
          <FaMoneyBillWaveAlt />
        </i>
        <h4>Valuable</h4>
      </div>
      <div className='card'>
        <i>
          <FaPassport />
        </i>
        <h4>Triple NFT</h4>
      </div>
    </div>
  )
}

export default Cards