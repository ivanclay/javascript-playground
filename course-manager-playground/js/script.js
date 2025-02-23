function renderCourses(containerId, courses) {
  const container = document.getElementById(containerId);
  container.innerHTML = ""; // Limpa o container antes de renderizar novos itens

  // Cria um container flexível para os cards
  const cardsContainer = document.createElement("div");
  cardsContainer.className = "cards-container"; // Adiciona uma classe para estilização
  container.appendChild(cardsContainer);

  for (var i = 0; i < courses.length; i++) {
    const card = document.createElement("div");
    card.className = "card";

    // Cria a frente do card
    const front = document.createElement("div");
    front.className = "front";

    // Adiciona a imagem
    const image = document.createElement("img");
    image.className = "img-course-item";
    image.src = courses[i].image;
    image.alt = courses[i].title;
    front.appendChild(image);

    // Adiciona a barra de progresso
    const progressBarContainer = document.createElement("div");
    progressBarContainer.className = "progress-bar-container";

    const progressBar = document.createElement("div");
    progressBar.className = "progress-bar";
    progressBar.style.width = `${courses[i].progress}%`;

    const progressTooltip = document.createElement("div");
    progressTooltip.className = "progress-tooltip";
    progressTooltip.textContent = `${courses[i].progress}%`;

    progressBarContainer.appendChild(progressBar);
    progressBarContainer.appendChild(progressTooltip);
    front.appendChild(progressBarContainer);

    // Adiciona o título
    const title = document.createElement("h3");
    title.textContent = courses[i].title;
    front.appendChild(title);

    // Adiciona a plataforma
    const platform = document.createElement("p");
    platform.innerHTML = `<strong>Plataforma:</strong> ${courses[i].platform}`;
    front.appendChild(platform);

    // Adiciona a data de início
    const startDate = document.createElement("p");
    startDate.innerHTML = `<strong>Início:</strong> ${courses[i].startDate}`;
    front.appendChild(startDate);

    // Adiciona a data de conclusão
    const endDate = document.createElement("p");
    endDate.innerHTML = `<strong>Término:</strong> ${
      courses[i].endDate || "Em andamento"
    }`;
    front.appendChild(endDate);

    // // Adiciona a barra de progresso
    // const progressBarContainer = document.createElement('div');
    // progressBarContainer.className = 'progress-bar-container';

    // const progressBar = document.createElement('div');
    // progressBar.className = 'progress-bar';
    // progressBar.style.width = `${courses[i].progress}%`;

    // const progressTooltip = document.createElement('div');
    // progressTooltip.className = 'progress-tooltip';
    // progressTooltip.textContent = `${courses[i].progress}%`;

    // progressBarContainer.appendChild(progressBar);
    // progressBarContainer.appendChild(progressTooltip);
    // front.appendChild(progressBarContainer);

    // Container para os botões
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";

    // Adiciona o botão "Acessar Curso"
    const link = document.createElement("a");
    link.href = courses[i].link;
    link.target = "_blank";
    link.textContent = "Acessar curso";
    link.className = "course-button";
    buttonContainer.appendChild(link);

    // Adiciona o botão "Acessar Código" (se houver código fonte)
    if (courses[i].sourceCode) {
      const linkbuttomGit = document.createElement("a");
      linkbuttomGit.href = courses[i].sourceCode;
      linkbuttomGit.target = "_blank";
      linkbuttomGit.textContent = "Acessar Código";
      linkbuttomGit.className = "source-code-button";

      const iconSource = document.createElement("i");
      iconSource.className = "fab fa-github";
      linkbuttomGit.appendChild(iconSource);
      buttonContainer.appendChild(linkbuttomGit);
    }

    // Adiciona o botão "Acessar Certificado" (se houver certificado)
    if (courses[i].certificate) {
      const link2certificate = document.createElement("a");
      link2certificate.href = courses[i].certificate;
      link2certificate.target = "_blank";
      link2certificate.textContent =
        courses[i].certificate === "Gratuito sem certificado!"
          ? "Gratuito sem certificado!"
          : "Acessar certificado";
      link2certificate.className = "course-button";
      buttonContainer.appendChild(link2certificate);
    }

    // Adiciona o container de botões ao front
    front.appendChild(buttonContainer);

    // Cria o verso do card
    const back = document.createElement("div");
    back.className = "back";
    back.textContent =
      courses[i].backText || "Texto de exemplo no verso do card.";

    // Adiciona o front e o back ao card
    card.appendChild(front);
    card.appendChild(back);

    // Adiciona o evento de clique para o efeito de flip
    card.addEventListener("click", function () {
      this.classList.toggle("flipped");
    });

    // Adiciona o card ao container flexível
    cardsContainer.appendChild(card);
  }
}
// // Função para renderizar os cursos
// function renderCourses(containerId, courses) {
//   const container = document.getElementById(containerId);
//   container.innerHTML = ''; // Limpa o container antes de renderizar novos itens

//   // Cria um container flexível para os cards
//   const cardsContainer = document.createElement('div');
//   cardsContainer.className = 'cards-container'; // Adiciona uma classe para estilização
//   container.appendChild(cardsContainer);

//   for (var i = 0; i < courses.length; i++) {
//     const card = document.createElement('div');
//     card.className = 'card';

//     // Cria elementos separados
//     const image = document.createElement('img');
//     image.className = 'img-course-item';
//     image.src = courses[i].image;
//     image.alt = courses[i].title;

//     // Cria a barra de progresso
//     const progressBarContainer = document.createElement('div');
//     progressBarContainer.className = 'progress-bar-container';

//     const progressBar = document.createElement('div');
//     progressBar.className = 'progress-bar';
//     progressBar.style.width = `${courses[i].progress}%`;

//     const progressTooltip = document.createElement('div');
//     progressTooltip.className = 'progress-tooltip';
//     progressTooltip.textContent = `${courses[i].progress}%`;

//     progressBarContainer.appendChild(progressBar);
//     progressBarContainer.appendChild(progressTooltip);

//     const title = document.createElement('h3');
//     title.textContent = courses[i].title;

//     const platform = document.createElement('p');
//     platform.innerHTML = `<strong>Plataforma:</strong> ${courses[i].platform}`;

//     const startDate = document.createElement('p');
//     startDate.innerHTML = `<strong>Início:</strong> ${courses[i].startDate}`;

//     const endDate = document.createElement('p');
//     endDate.innerHTML = `<strong>Término:</strong> ${courses[i].endDate || 'Em andamento'}`;

//     const link = document.createElement('a');
//     link.href = courses[i].link;
//     link.target = '_blank';
//     link.textContent = 'Acessar curso';
//     link.className = 'course-button';

//     const link2certificate = document.createElement('a');
//     link2certificate.href = courses[i].certificate;
//     link2certificate.target = '_blank';
//     link2certificate.textContent = courses[i].certificate == 'Gratuito sem certificado!' ? 'Gratuito sem certificado!' : 'Acessar certificado';
//     link2certificate.className = courses[i].certificate ? 'course-button' : 'course-button-none';

//     const linkbuttomGit = document.createElement('a');
//     linkbuttomGit.href = courses[i].sourceCode;
//     linkbuttomGit.target = '_blank';
//     linkbuttomGit.textContent = courses[i].sourceCode == '' ? '' : 'Acessar Código';
//     linkbuttomGit.className = courses[i].sourceCode ? 'source-code-button' : 'display-none';

//     const iconSource = document.createElement('i');
//     iconSource.className = 'fab fa-github';
//     linkbuttomGit.appendChild(iconSource);

//     // Adiciona os elementos ao card
//     card.appendChild(image);
//     card.appendChild(progressBarContainer); // Adiciona a barra de progresso
//     card.appendChild(title);
//     card.appendChild(platform);
//     card.appendChild(startDate);
//     card.appendChild(endDate);
//     card.appendChild(link);
//     card.appendChild(linkbuttomGit);
//     card.appendChild(link2certificate);

//     // Adiciona o card ao container flexível
//     cardsContainer.appendChild(card);
//   }
// }

// Função para criar um título na página
function createDivTitulo(titulo) {
  const principal = document.getElementById("principal");
  principal.innerHTML = ""; // Limpa o container antes de renderizar novos itens

  const title = document.createElement("h1");
  title.textContent = titulo;
  principal.appendChild(title);
}

// Função para filtrar cursos por tag
function searchCoursesByTag(tag) {
  fetch("data/data.json")
    .then((response) => response.json())
    .then((data) => {
      const filteredCourses = data.Courses.filter(
        (course) => course.tags && course.tags.includes(tag)
      );
      createDivTitulo(`Cursos com a tag: ${tag}`);
      renderCourses("principal", filteredCourses);
    })
    .catch((error) => {
      console.error("Erro ao carregar o arquivo JSON:", error);
    });
}

// Função para exibir todos os cursos
function displayAllCourses() {
  fetch("data/data.json")
    .then((response) => response.json())
    .then((data) => {
      createDivTitulo("Todos os Cursos");
      renderCourses("principal", data.Courses);
    })
    .catch((error) => {
      console.error("Erro ao carregar o arquivo JSON:", error);
    });
}

// Função para exibir as tags disponíveis
function displayAvailableTags() {
  fetch("data/data.json")
    .then((response) => response.json())
    .then((data) => {
      const tagsSet = new Set();
      data.Courses.forEach((course) => {
        if (course.tags) {
          course.tags.forEach((tag) => tagsSet.add(tag));
        }
      });
      const tagsContainer = document.getElementById("tagsContainer");
      tagsContainer.innerHTML = "";
      tagsSet.forEach((tag) => {
        const tagElement = document.createElement("div");
        tagElement.className = "tag";
        tagElement.textContent = tag;
        tagElement.addEventListener("click", () => searchCoursesByTag(tag));
        tagsContainer.appendChild(tagElement);
      });
    })
    .catch((error) => {
      console.error("Erro ao carregar o arquivo JSON:", error);
    });
}

// Função para filtrar cursos por categoria
function filterCoursesByCategory(category) {
  fetch("data/data.json")
    .then((response) => response.json())
    .then((data) => {
      const filteredCourses = data.Courses.filter(
        (course) => course.category === category
      );
      createDivTitulo(`Cursos da categoria: ${category}`);
      renderCourses("principal", filteredCourses);
    })
    .catch((error) => {
      console.error("Erro ao carregar o arquivo JSON:", error);
    });
}

// Captura a entrada do usuário no campo de busca
document
  .getElementById("searchInput")
  .addEventListener("input", function (event) {
    const searchTerm = event.target.value.toLowerCase();
    if (searchTerm === "") {
      displayAllCourses(); // Exibe todos os cursos se o campo estiver vazio
    } else {
      searchCoursesByTag(searchTerm); // Filtra os cursos pela tag
    }
  });

// Exibe as tags disponíveis ao carregar a página
displayAvailableTags();

// Carrega o JSON externamente e renderiza os cursos
displayAllCourses(); // Exibe todos os cursos ao carregar a página

// Função para filtrar por categoria no menu
function filtrarMenu(menu, type) {
  createDivTitulo(menu);
  filterCoursesByCategory(type);
}
