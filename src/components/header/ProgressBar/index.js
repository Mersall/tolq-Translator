import { useSelector } from 'react-redux'
import './style.css'
function ProgressBar(params) {
  const count = useSelector((state) => state?.counter?.value)

  return (
    <div className="ProgressBar_container">
      <p>Progress</p>
      <span className="progressBar_labe">{count}/100 words</span>
      <progress
        className="progressBar"
        id="file"
        value={count}
        max="100"
      ></progress>
    </div>
  )
}

export default ProgressBar
