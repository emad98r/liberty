import './SectionTitle.scss'

const SectionsTitle = (props) => {
  return (
    <div className='section-title'>
      <h4>{props.title}</h4>
      <h4>{props.section}</h4>
      <h4>{props.restOfTitle}</h4>
    </div>
  )
}

export default SectionsTitle