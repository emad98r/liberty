import './Collections.scss'
import { SectionsTitle, CollectionsCards } from '../../components/indexCom'



const Collections = () => {
  return (
    <div className='Collections'>
      <div className='container'>
        <SectionsTitle title='Explore Some Hot ' section='Collections ' restOfTitle='In Market.' />
        <div className='coll-cards-wrapper'>

          <CollectionsCards title='Genesis Collective Statue' items='245/215' category='Music Art' />

          <CollectionsCards title='Worldwide Artwork Ground' items='426/468' category='Blockchain' />

          <CollectionsCards title='Mutant Bored Ape Yacht Club' items='245/215' category='Music Art' />

          <CollectionsCards title='Genesis Collective Statue' items='245/215' category='Music Art' />

          <CollectionsCards title='Genesis Collective Statue' items='245/215' category='Music Art' />

          <CollectionsCards title='Genesis Collective Statue' items='245/215' category='Music Art' />
        </div>
      </div>

    </div>
  )
}

export default Collections