import './index.css'

const TabItem = props => {
  const {tabDetails, onChangeTab} = props
  const {tabId, displayText} = tabDetails
  const onClickTab = () => {
    onChangeTab(tabId)
  }

  return (
    <li
      className="tabItemContainer d-flex flex-row justify-content-center align-items-center p-2"
      onClick={onClickTab}
    >
      <h1 className="tabItem">{displayText}</h1>
    </li>
  )
}

export default TabItem
