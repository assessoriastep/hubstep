import type { LucideIcon } from "lucide-react";
import plurallLogo from "@/assets/plurall-logo.png";
import {
  Cloud,
  FileText,
  GraduationCap,
  Instagram,
  Laptop,
  LifeBuoy,
  Linkedin,
  Facebook,
  Youtube,
  Play,
  ShoppingBag,
  Users,
} from "lucide-react";

export interface HubLink {
  title: string;
  description: string;
  url: string;
  icon?: LucideIcon;
  image?: string;
  accent: "red" | "yellow" | "cyan" | "green";
}

export interface HubGroup {
  id: string;
  label: string;
  /** Se definido, o item do menu abre este link externo em nova aba. */
  href?: string;
  links: HubLink[];
}

/**
 * Edite esta lista para adicionar, remover ou reordenar os links do hub.
 * `url` aceita qualquer endereço externo (plataformas, drives, formulários...).
 */
export const hubGroups: HubGroup[] = [
  {
    id: "plataformas",
    label: "Plataformas",
    links: [
      {
        title: "Plataforma do Professor",
        description: "Planos de aula, trilhas e acompanhamento das turmas.",
        url: "https://stepeduc.com.br/",
        icon: Laptop,
        accent: "red",
      },
      {
        title: "Área do Aluno",
        description: "Atividades, desafios e projetos do StepKit.",
        url: "https://stepeduc.com.br/",
        icon: GraduationCap,
        accent: "cyan",
      },
      {
        title: "Embarque Plural",
        description: "Cadastrar ou migrar suas turmas no Plurall",
        url: "https://experienciaplurall.my.canva.site/embarque-plurall",
        image: plurallLogo,
        accent: "yellow",
      },
    ],
  },
  {
    id: "materiais",
    label: "Arquivos",
    href: "https://drive.google.com/drive/folders/1wswXyPAtVFl-4vcUtFZ6kGvX6NsrJzTG?usp=sharing",
    links: [
      {
        title: "Drive de Materiais",
        description: "Apostilas, guias e recursos pedagógicos para download.",
        url: "https://stepeduc.com.br/",
        icon: Cloud,
        accent: "green",
      },
      {
        title: "Catálogo de Produtos",
        description: "StepKit, Laboratório Maker e soluções por segmento.",
        url: "https://stepeduc.com.br/",
        icon: ShoppingBag,
        accent: "red",
      },
      {
        title: "Videoaulas de Formação",
        description: "Trilha completa de formação docente em vídeo.",
        url: "https://stepeduc.com.br/",
        icon: Play,
        accent: "cyan",
      },
    ],
  },
  {
    id: "suporte",
    label: "Suporte e Contato",
    links: [
      {
        title: "Suporte Pedagógico",
        description: "Fale com um especialista STEP e tire suas dúvidas.",
        url: "https://wa.me/5512991890737",
        icon: LifeBuoy,
        accent: "green",
      },
      {
        title: "Distribuidores B2G",
        description: "Informações para parcerias com o poder público.",
        url: "https://stepeduc.com.br/distribuidores-b2g/",
        icon: Users,
        accent: "yellow",
      },
      {
        title: "Documentos e Contratos",
        description: "Propostas comerciais, contratos e certificados.",
        url: "https://stepeduc.com.br/",
        icon: FileText,
        accent: "red",
      },
    ],
  },
];

export const socialLinks = [
  { label: "Instagram", url: "https://instagram.com/", icon: Instagram },
  { label: "YouTube", url: "https://youtube.com/", icon: Youtube },
  { label: "LinkedIn", url: "https://linkedin.com/", icon: Linkedin },
  { label: "Facebook", url: "https://facebook.com/", icon: Facebook },
];

export const whatsappUrl = "https://wa.me/5512991890737";