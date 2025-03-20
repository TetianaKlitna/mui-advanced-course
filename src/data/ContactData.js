const newDate = new Date();
const formattedDate = `${newDate.getMonth() + 1}/${newDate.getDate()}/${newDate.getFullYear()}`;

export const contacts = [
  {
    id: 1,
    name: "Tetiana Klitna",
    role: "Dev",
    skills: ["React", "Angular", "Python"],
    startDate: formattedDate,
    preference: "Work from Home"
  },
  {
    id: 2,
    name: "Kristi Hann",
    role: "Dev",
    skills: ["Angular"],
    startDate: formattedDate,
    preference: "Work from Home"
  },
  {
    id: 3,
    name: "Monica Blant",
    role: "Dev",
    skills: ["React"],
    startDate: formattedDate,
    preference: "Work from Home"
  },
  {
    id: 4,
    name: "Barbara Kelly",
    role: "Dev",
    skills: ["React", "Angular"],
    startDate: formattedDate,
    preference: "On site"
  }
];