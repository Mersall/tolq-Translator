import CommentSection from './CommentSection'
import FormBody from './FormBody'
import './style.css'
function pageContent(params) {
  return (
    <div className="page_container">
      <FormBody />
      <CommentSection />
    </div>
  )
}

export default pageContent
