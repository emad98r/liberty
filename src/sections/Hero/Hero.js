import './Hero.scss'
import banner1 from '../../assets/images/banner-01.png'
import banner2 from '../../assets/images/banner-02.png'
import { MainButton, SubButton } from '../../components/indexCom'


const Hero = () => {
  return (
    <div className='hero'>
      <div className='container'>
        <div className='info'>
          <h4>Liberty NFT Market</h4>
          <h2>CREATE, SELL & COLLECT TOP NFT’S.</h2>
          <p>Liberty NFT Market is a really cool and professional design for your NFT websites. This HTML CSS template is based on Bootstrap v5 and it is designed for NFT related web portals. Liberty can be freely downloaded from TemplateMo's free css templates.</p>


          <div className='Buttons'>
            <MainButton label='Explore Top NFTs' />
            <SubButton label='Watch Our Videos' />
          </div>
        </div>
        <div className='hero-imgs'>
          <img src={banner1} />
          <img src={banner2} />
        </div>
      </div>
    </div>
  )
}

export default Hero