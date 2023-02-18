import './Market.scss'
import { SectionsTitle, MarketItems } from '../../components/indexCom'




const Market = () => {
  return (
    <div className='market'>
      <div className='container'>

        <div className='header'>
          <SectionsTitle section=' Items ' restOfTitle='Currently In The Market.' />
          <ul>
            <li className='active'>All Items</li>
            <li>Music Art</li>
            <li>Digital Art</li>
            <li>Blockchain</li>
            <li>Virtual</li>
          </ul>
        </div>
      </div>
      <MarketItems />
    </div>
  )
}

export default Market