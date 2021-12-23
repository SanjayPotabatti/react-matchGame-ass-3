import './index.css'

const ImageItem = props => {
  const {imageDetails, onClickThumbnail} = props
  const {id, imageUrl} = imageDetails

  const onClickImage = () => {
    onClickThumbnail(id)
  }

  return (
    <li className="liImageContainer pr-2 pt-2">
      <img
        src={imageUrl}
        alt="thumbnail"
        className="liImg"
        onClick={onClickImage}
      />
    </li>
  )
}

export default ImageItem
