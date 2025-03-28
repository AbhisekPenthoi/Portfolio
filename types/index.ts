export interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl: string
  githubUrl: string
  featured?: boolean
  completedAt?: string
}

export interface Certificate {
  title: string
  issuedBy: string
  issuedDate: string
  image: string
  skills: string[]
  description: string
  verificationUrl?: string
} 