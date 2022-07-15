import { useEffect, useState } from 'react'
import { Data } from '../../../utilities/posts'
import TextAreaComponent from './TextAreaComponent'
import { useDispatch } from 'react-redux'
import { countWords } from '../../../Redux/features/ProgressCountSlice'
import { passId } from '../../../Redux/features/PostSlice'

function FormBody(params) {
  const [posts, setPosts] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    Data.posts()
      .then((res) => {
        setPosts(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className="FormBoyd_container">
      <h3>markDown.md</h3>
      {posts.map(({ title, id }) => {
        return (
          <TextAreaComponent
            key={id}
            handleChange={(count) => dispatch(countWords(count))}
            handleFocus={(i) => dispatch(passId(i))}
            title={title}
            id={id}
          />
        )
      })}
    </div>
  )
}

export default FormBody
