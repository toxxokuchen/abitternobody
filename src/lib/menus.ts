export interface MenuItem {
  name: string;
  url: string;
  description: string;
}

export const Menus = [
  { name: "A bitter nobody", url: "/", description: "home입니다." },
  { name: "About", url: "/about", description: "저에 관하여" },
  { name: "Gallery", url: "/gallery", description: "이미지 전시대" },
  { name: "Blog", url: "/blog", description: "블로그" },
];
