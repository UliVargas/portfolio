export interface Repo {
  id: number
  name: string
  full_name: string
  owner: Owner
  html_url: string
  description: null
  url: string
}

export interface Owner {
  avatar_url: string
  gravatar_id: string
  url: string
  type: string
}
