import axios from 'axios'

import type { Repo } from '~/models/repo'

export const getAllRepos = async (): Promise<Repo[]> => {
  return await axios
    .get<Repo[]>('https://api.github.com/user/repos', {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
      }
    })
    .then(resp => resp.data)
}
