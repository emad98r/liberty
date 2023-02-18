import './CollectionsCards.scss'
import { MainButton } from '../indexCom'

import CollImg from '../../assets/images/collection-01.jpg'

const CollectionsCards = (props) => {
  return (
    <div className='coll-cards'>
      <div className='card'>
        <img src={CollImg} />
        <div className='info'>
          <h4>{props.title}</h4>
          <hr />
          <div className='data'>

            <div className='Items-In-Collection'>
              <p>Items In Collection:</p>
              <b>{props.items}</b>
            </div>
            <div className='Category'>
              <p>Category:</p>
              <b>{props.category}</b>
            </div>
          </div>
        </div>
        <MainButton label='Explore More' />
      </div>
    </div>
  )
}

export default CollectionsCards