import { SectionsTitle, SubButton, YourNftSteps } from '../../components/indexCom'
import './CreateYourNFT.scss'
import { FaCentos, FaCodeBranch, FaPassport } from "react-icons/fa";
const CreateYourNFT = () => {
  return (
    <div className='create-nft'>
      <div className='container'>
        <div className='header'>
          <SectionsTitle title='Create Your NFT & Put It On The Market.' />
          <SubButton label='Create Your NFT' />
        </div>
        <div className='cards'>

          <YourNftSteps title='Set Up Your Wallet' text='NFT means Non-Fungible Token that are used in digital cryptocurrency markets. There are many different kinds of NFTs in the industry.' img={<FaCentos />} />
          <YourNftSteps title='Add Your Digital NFT' text='There are 5 different HTML pages included in this NFT website template. You can edit or modify any section on any page as you required.' img={<FaCodeBranch />} />

          <YourNftSteps title='Sell Your NFT & Make Profit' text='If you would like to support our TemplateMo website, please visit our contact page to make a PayPal contribution. Thank you.' img={<FaPassport />} />
        </div>
      </div>
    </div>
  )
}

export default CreateYourNFT