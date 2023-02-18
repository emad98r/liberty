import './MarketItems.scss'
import MarketImg from '../../assets/images/market-01.jpg'
import UserImg from '../../assets/images/author.jpg'


const MarketItems = (props) => {
  return (
    <div className='container'>
      <div className='items'>
        <div className='item'>
          <img className='big-img' src={MarketImg} />
          <div className='info'>
            <div className='top'>
              <h4>Music Art Super Item</h4>
              <div className='user'>
                <img src={UserImg} />
                <h5>Liberty Artist <br /><i>@libertyart</i> </h5>
              </div>
            </div>
            <hr />
            <div className='bottom'>
              <div className='bot-wrapper'>

                <div className='Current'>
                  <p>Current Bid </p>
                  <b>2.03 ETH</b>
                  <p>($8,240.50)</p>
                </div>
                <div className='ends'>
                  <p>Ends In</p>
                  <b>4D 08H 15M 42S</b>
                  <p>(July 24th, 2022)</p>
                </div>
              </div>
            </div>
            <a>View Item Details</a>
          </div>
        </div>
        <div className='item'>
          <img className='big-img' src={MarketImg} />
          <div className='info'>
            <div className='top'>
              <h4>Digital Crypto Artwork</h4>
              <div className='user'>
                <img src={UserImg} />
                <h5>Liberty Artist <br /><i>@libertyart</i> </h5>
              </div>
            </div>
            <hr />
            <div className='bottom'>
              <div className='bot-wrapper'>

                <div className='Current'>
                  <p>Current Bid </p>
                  <b>2.03 ETH</b>
                  <p>($8,240.50)</p>
                </div>
                <div className='ends'>
                  <p>Ends In</p>
                  <b>4D 08H 15M 42S</b>
                  <p>(July 24th, 2022)</p>
                </div>
              </div>
            </div>
            <a>View Item Details</a>
          </div>
        </div>
        <div className='item'>
          <img className='big-img' src={MarketImg} />
          <div className='info'>
            <div className='top'>
              <h4>Blockchain Item One</h4>
              <div className='user'>
                <img src={UserImg} />
                <h5>Liberty Artist <br /><i>@libertyart</i> </h5>
              </div>
            </div>
            <hr />
            <div className='bottom'>
              <div className='bot-wrapper'>

                <div className='Current'>
                  <p>Current Bid </p>
                  <b>2.03 ETH</b>
                  <p>($8,240.50)</p>
                </div>
                <div className='ends'>
                  <p>Ends In</p>
                  <b>4D 08H 15M 42S</b>
                  <p>(July 24th, 2022)</p>
                </div>
              </div>
            </div>
            <a>View Item Details</a>
          </div>
        </div>
        <div className='item'>
          <img className='big-img' src={MarketImg} />
          <div className='info'>
            <div className='top'>
              <h4>Virtual Currency Art</h4>
              <div className='user'>
                <img src={UserImg} />
                <h5>Liberty Artist <br /><i>@libertyart</i> </h5>
              </div>
            </div>
            <hr />
            <div className='bottom'>
              <div className='bot-wrapper'>

                <div className='Current'>
                  <p>Current Bid </p>
                  <b>2.03 ETH</b>
                  <p>($8,240.50)</p>
                </div>
                <div className='ends'>
                  <p>Ends In</p>
                  <b>4D 08H 15M 42S</b>
                  <p>(July 24th, 2022)</p>
                </div>
              </div>
            </div>
            <a>View Item Details</a>
          </div>
        </div>
        <div className='item'>
          <img className='big-img' src={MarketImg} />
          <div className='info'>
            <div className='top'>
              <h4>Digital Art Item</h4>
              <div className='user'>
                <img src={UserImg} />
                <h5>Liberty Artist <br /><i>@libertyart</i> </h5>
              </div>
            </div>
            <hr />
            <div className='bottom'>
              <div className='bot-wrapper'>

                <div className='Current'>
                  <p>Current Bid </p>
                  <b>2.03 ETH</b>
                  <p>($8,240.50)</p>
                </div>
                <div className='ends'>
                  <p>Ends In</p>
                  <b>4D 08H 15M 42S</b>
                  <p>(July 24th, 2022)</p>
                </div>
              </div>
            </div>
            <a>View Item Details</a>
          </div>
        </div>
        <div className='item'>
          <img className='big-img' src={MarketImg} />
          <div className='info'>
            <div className='top'>
              <h4>Blockchain Music Design</h4>
              <div className='user'>
                <img src={UserImg} />
                <h5>Liberty Artist <br /><i>@libertyart</i> </h5>
              </div>
            </div>
            <hr />
            <div className='bottom'>
              <div className='bot-wrapper'>

                <div className='Current'>
                  <p>Current Bid </p>
                  <b>2.03 ETH</b>
                  <p>($8,240.50)</p>
                </div>
                <div className='ends'>
                  <p>Ends In</p>
                  <b>4D 08H 15M 42S</b>
                  <p>(July 24th, 2022)</p>
                </div>
              </div>
            </div>
            <a>View Item Details</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarketItems