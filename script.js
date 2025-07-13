const languages = [
  { name: "C", link: "c.html" },
  { name: "C++", link: "cpp.html" },
  { name: "Java", link: "java.html" },
  { name: "HTML", link: "html.html" },
  { name: "CSS", link: "css.html" },
  { name: "JavaScript", link: "javascript.html" },
  { name: "Python", link: "python.html" },
  { name: "AI", link: "ai.html" },
  { name: "AIML", link: "aiml.html" },
  { name: "Data Science & AI", link: "ds-ai.html" },
  { name: "Data Science", link: "datascience.html" },
  { name: "Cybersecurity", link: "cybersecurity.html" }
];

const menu = document.getElementById("language-menu");

languages.forEach(lang => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = lang.link;
  a.textContent = lang.name;
  li.appendChild(a);
  menu.appendChild(li);
});
