import { ENDPOINTS } from '../api/Endpoints'
import { Network } from '../api/Network'

export class Data {
  static posts(data) {
    return Network.fetch(
      ENDPOINTS.posts.url,
      {
        method: ENDPOINTS.posts.method,
      },
      false,
    )
  }

  static comments(id) {
    return Network.fetch(
      ENDPOINTS.comments.url(id),
      {
        method: ENDPOINTS.comments.method,
      },
      false,
    )
  }
}
