import { SectionsTitle, Cards } from '../../components/indexCom';
import './Categories.scss';



const Categories = () => {
  return (
    <div className='categories'>
      <div className='container'>
        <SectionsTitle title='Browse Through Our'
          section=' Categories ' restOfTitle=' Here.
          ' />
        <Cards />
      </div>

    </div>
  )
}

export default Categories