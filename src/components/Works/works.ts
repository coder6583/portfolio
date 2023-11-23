export type worksItem = {
  name: string;
  subtitle: string;
  thumbnail: string;
  description: string;
  categories: string[];
  techstack: string[];
  website?: string;
  github?: string;
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
      categories: ["Compiler", "Education"],
      techstack: ["C/C++", "Rust", "React", "TypeScript"],
      description:
        "I created a compiled programming language with C/C++ and Rust. This programming language allows the user to set the grammar freely, enabling them to write programs in any language they want. The compiler can also convert between different grammars to enable users to read programs written in a different language.",
      website: "https://laze.ddns.net",
      github: "https://github.com/Laze-Project-Team",
    },
    charEngine3D: {
      name: "Character-based 3D Engine",
      subtitle: "文字描画3Dエンジン",
      thumbnail: "/images/charEngine3D.png",
      categories: ["Web Dev", "3D Engine"],
      techstack: ["HTML/CSS", "JavaScript"],
      description:
        "I created a 3D Engine that is rendered with Japanese Kanji Characters. To understand how 3D Engines work internally, I used no libraries. I implemented all of the calculations from vector and matrix calcuations to shader calculations, by myself.",
      github: "https://github.com/coder6583/3DChar",
    },
    engine3D: {
      name: "OpenGL-based 3D Engine",
      subtitle: "OpenGL描画3Dエンジン",
      thumbnail: "/images/engine3D.png",
      categories: ["3D Engine", "Desktop App"],
      techstack: ["C/C++", "OpenGL", "ImGui", "Bullet3D"],
      description:
        "I created a 3D Engine that is rendered with OpenGL. With a GUI created with ImGui, this 3D Engine allows you to write code that can simulate the movement of objects. A physics engine is also integrated to give a realistic simulation. ",
      github: "https://github.com/coder6583/3DEngine6",
    },
    textEditor: {
      name: "Axis Editor",
      subtitle: "Axisテキストエディター",
      thumbnail: "/images/axis-editor.png",
      categories: ["Text Editor", "Desktop App"],
      techstack: ["C/C++", "QT5"],
      description:
        "I created a text editor using C++ and QT5. I used Regular Expression to implement the syntax highlighting. This was one of my first programming projects, and I learned the basics of C++ through this project.",
      github: "https://github.com/coder6583/Epic-Editor",
    },
  },
  en: {
    laze: {
      name: "Laze Language",
      subtitle: "Programming language with multilingual support",
      thumbnail: "/images/laze.png",
      categories: ["Compiler", "Education"],
      techstack: ["C/C++", "Rust", "React", "TypeScript"],
      description:
        "I created a compiled programming language with C/C++ and Rust. This programming language allows the user to set the grammar freely, enabling them to write programs in any language they want. The compiler can also convert between different grammars to enable users to read programs written in a different language.",
      website: "https://laze.ddns.net",
      github: "https://github.com/Laze-Project-Team",
    },
    charEngine3D: {
      name: "Character-based 3D Engine",
      subtitle: "3D Engine rendered with Japanese Kanji Characters",
      thumbnail: "/images/charEngine3D.png",
      categories: ["Web Dev", "3D Engine"],
      techstack: ["HTML/CSS", "JavaScript"],
      description:
        "I created a 3D Engine that is rendered with Japanese Kanji Characters. To understand how 3D Engines work internally, I used no libraries. I implemented all of the calculations from vector and matrix calcuations to shader calculations, by myself.",
      github: "https://github.com/coder6583/3DChar",
    },
    engine3D: {
      name: "OpenGL-based 3D Engine",
      subtitle: "3D Engine using OpenGL and ImGui",
      thumbnail: "/images/engine3D.png",
      categories: ["3D Engine", "Desktop App"],
      techstack: ["C/C++", "OpenGL", "ImGui", "Bullet3D"],
      description:
        "I created a 3D Engine that is rendered with OpenGL. With a GUI created with ImGui, this 3D Engine allows you to write code that can simulate the movement of objects. A physics engine is also integrated to give a realistic simulation. ",
      github: "https://github.com/coder6583/3DEngine6",
    },
    textEditor: {
      name: "Axis Editor",
      subtitle: "Basic text editor with syntax highlighting",
      thumbnail: "/images/axis-editor.png",
      categories: ["Text Editor", "Desktop App"],
      techstack: ["C/C++", "QT5"],
      description:
        "I created a text editor using C++ and QT5. I used Regular Expression to implement the syntax highlighting. This was one of my first programming projects, and I learned the basics of C++ through this project.",
      github: "https://github.com/coder6583/Epic-Editor",
    },
  },
};
