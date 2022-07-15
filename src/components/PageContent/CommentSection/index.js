import { useEffect, useState } from 'react'
import { Data } from '../../../utilities/posts'
import { useSelector } from 'react-redux'

function CommentSection(params) {
  const postId = useSelector((state) => state?.postId?.value)
  const [comments, setComments] = useState('')
  useEffect(() => {
    Data.comments(postId)
      .then((res) => {
        setComments(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [postId])
  return (
    <div className="CommentSection_container">
      <h3>Quality Check</h3>
      <p>
        <strong>Id:</strong> {comments && comments.id}
      </p>
      <p>
        <strong>Email:</strong> {comments && comments.email}
      </p>
      <p>
        <strong>Body:</strong> {comments && comments.body}
      </p>
    </div>
  )
}

export default CommentSection
