export type worksItem = {
  name: string;
  subtitle: string;
  thumbnail: string;
};

export const works: {
  [lang: string]: {
    [id: string]: worksItem;
  };
} = {
  ja: {
    laze: {
      name: "Laze Language",
      subtitle: "Lazeプログラミング言語",
      thumbnail: "/images/laze.png",
    },
    charEngine3D: {
      name: "Character-based 3D Engine",
      subtitle: "文字描画3Dエンジン",
      thumbnail: "/images/charEngine3D.png",
    },
    engine3D: {
      name: "OpenGL-based 3D Engine",
      subtitle: "OpenGL描画3Dエンジン",
      thumbnail: "/images/engine3D.png",
    },
    textEditor: {
      name: "Axis Editor",
      subtitle: "Axisテキストエディター",
      thumbnail: "/images/axis-editor.png",
    },
  },
  en: {
    laze: {
      name: "Laze Language",
      subtitle: "Programming language with multilingual support",
      thumbnail: "/images/laze.png",
    },
    charEngine3D: {
      name: "Character-based 3D Engine",
      subtitle: "3D Engine rendered with Japanese Kanji Characters",
      thumbnail: "/images/charEngine3D.png",
    },
    engine3D: {
      name: "OpenGL-based 3D Engine",
      subtitle: "3D Engine using OpenGL and ImGui",
      thumbnail: "/images/engine3D.png",
    },
    textEditor: {
      name: "Axis Editor",
      subtitle: "Basic text editor with syntax highlighting",
      thumbnail: "/images/axis-editor.png",
    },
  },
};
