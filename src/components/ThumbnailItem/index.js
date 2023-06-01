import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, updateImage, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const thumbnailClassName = isActive ? 'image ' : 'image active'
  const onClickImage = () => {
    updateImage(id)
  }

  return (
    <li>
      <button className="thumbnailButton" type="button" onClick={onClickImage}>
        <img
          src={thumbnailUrl}
          className={thumbnailClassName}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
