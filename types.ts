import { IconType } from "react-icons"

export interface IService {
  title: string,
  about: string,
  Icon: IconType
}

export interface ISkill {
  name: string,
  level: string,
  Icon: IconType
}

export interface IProject {
  id: number,
  name: string,
  description: string,
  image_path: string,
  deploy_url: string,
  github_url: string,
  category: Category[],
  key_techs: string[],
}

export type Category = "React" | "Vue" | "Express" | "Node" | "Vanilla" | "React Native" | "Framer Motion" | "Next"