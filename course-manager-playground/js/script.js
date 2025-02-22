// Função para renderizar os cursos com estrutura separada para imagem, título, conteúdo e botão
function renderCourses(containerId, courses) {
  const container = document.getElementById(containerId);
  container.innerHTML = ''; // Limpa o container antes de renderizar novos itens

  // Cria um container flexível para os cards
  const cardsContainer = document.createElement('div');
  cardsContainer.className = 'cards-container'; // Adiciona uma classe para estilização
  container.appendChild(cardsContainer);

  for (var i = 0; i < courses.length; i++) {
    const card = document.createElement('div');
    card.className = 'card';

    // Cria elementos separados
    const image = document.createElement('img');
    image.className = 'img-course-item';
    image.src = courses[i].image;
    image.alt = courses[i].title;

    const title = document.createElement('h3');
    title.textContent = courses[i].title;

    const platform = document.createElement('p');
    platform.innerHTML = `<strong>Plataforma:</strong> ${courses[i].platform}`;

    const progress = document.createElement('p');
    progress.innerHTML = `<strong>Progresso:</strong> ${courses[i].progress}%`;

    const startDate = document.createElement('p');
    startDate.innerHTML = `<strong>Início:</strong> ${courses[i].start_date}`;

    const endDate = document.createElement('p');
    endDate.innerHTML = `<strong>Término:</strong> ${courses[i].end_date || 'Em andamento'}`;

    const link = document.createElement('a');
    link.href = courses[i].link;
    link.target = '_blank';
    link.textContent = 'Acessar curso';
    link.className = 'course-button';

    const link2certificate = document.createElement('a');
    link2certificate.href = courses[i].certificate;
    link2certificate.target = '_blank';
    link2certificate.textContent = courses[i].certificate == 'Gratuito sem certificado!' ? 'Gratuito sem certificado!' : 'Acessar certificado';
    link2certificate.className = courses[i].certificate ? 'course-button' : 'course-button-none';

    const linkbuttomGit = document.createElement('a');
    linkbuttomGit.href = courses[i].source_code;
    linkbuttomGit.target = '_blank';
    linkbuttomGit.textContent = courses[i].source_code == '' ? '' : 'Acessar Código';
    linkbuttomGit.className = courses[i].source_code ? 'source-code-button' : 'display-none';

    const iconSource = document.createElement('i');
    iconSource.className = 'fab fa-github';
    linkbuttomGit.appendChild(iconSource);

    // Adiciona os elementos ao card
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(platform);
    card.appendChild(progress);
    card.appendChild(startDate);
    card.appendChild(endDate);
    card.appendChild(link);
    card.appendChild(linkbuttomGit);
    card.appendChild(link2certificate);

    // Adiciona o card ao container flexível
    cardsContainer.appendChild(card);
  }
}

// Função para criar um título na página
function createDivTitulo(titulo) {
  const principal = document.getElementById("principal");
  principal.innerHTML = ''; // Limpa o container antes de renderizar novos itens

  const title = document.createElement('h1');
  title.textContent = titulo;
  principal.appendChild(title);
}

// Função para filtrar cursos por tag
function searchCoursesByTag(tag) {
  fetch('data/data.json')
    .then(response => response.json())
    .then(data => {
      const filteredCourses = [];
      data.categories.forEach(category => {
        category.courses.forEach(course => {
          if (course.tags && course.tags.includes(tag)) {
            filteredCourses.push(course);
          }
        });
      });
      createDivTitulo(`Cursos com a tag: ${tag}`);
      renderCourses('principal', filteredCourses);
    })
    .catch(error => {
      console.error('Erro ao carregar o arquivo JSON:', error);
    });
}

// Função para exibir todos os cursos
function displayAllCourses() {
  fetch('data/data.json')
    .then(response => response.json())
    .then(data => {
      const allCourses = [];
      data.categories.forEach(category => {
        category.courses.forEach(course => {
          allCourses.push(course);
        });
      });
      createDivTitulo('Todos os Cursos');
      renderCourses('principal', allCourses);
    })
    .catch(error => {
      console.error('Erro ao carregar o arquivo JSON:', error);
    });
}

// Função para exibir as tags disponíveis
function displayAvailableTags() {
  fetch('data/data.json')
    .then(response => response.json())
    .then(data => {
      const tagsSet = new Set();
      data.categories.forEach(category => {
        category.courses.forEach(course => {
          if (course.tags) {
            course.tags.forEach(tag => tagsSet.add(tag));
          }
        });
      });
      const tagsContainer = document.getElementById('tagsContainer');
      tagsContainer.innerHTML = '';
      tagsSet.forEach(tag => {
        const tagElement = document.createElement('div');
        tagElement.className = 'tag';
        tagElement.textContent = tag;
        tagElement.addEventListener('click', () => searchCoursesByTag(tag));
        tagsContainer.appendChild(tagElement);
      });
    })
    .catch(error => {
      console.error('Erro ao carregar o arquivo JSON:', error);
    });
}

// Captura a entrada do usuário no campo de busca
document.getElementById('searchInput').addEventListener('input', function(event) {
  const searchTerm = event.target.value.toLowerCase();
  if (searchTerm === '') {
    displayAllCourses(); // Exibe todos os cursos se o campo estiver vazio
  } else {
    searchCoursesByTag(searchTerm); // Filtra os cursos pela tag
  }
});

// Exibe as tags disponíveis ao carregar a página
displayAvailableTags();

// Carrega o JSON externamente e renderiza os cursos
displayAllCourses(); // Exibe todos os cursos ao carregar a página

function filtrarMenu(menu, type) {
  fetch('data/data.json')
    .then(response => response.json())
    .then(data => {
      createDivTitulo(menu);
      const principal = document.getElementById("principal");
      var categories = data.categories;
      for (var i = 0; i < categories.length; i++) {
        if (categories[i].type == type) {
          createBox(categories[i]);
        }
        if (type == 'all-courses') {
          createBox(categories[i]);
        }
      }
    })
    .catch(error => {
      console.error('Erro ao carregar o arquivo JSON:', error);
    });
}

function createBox(category) {
  const divCategory = document.createElement('div');
  divCategory.className = 'container';
  divCategory.id = category.type;
  divCategory.innerHTML = ''; // Limpa o container antes de renderizar novos itens

  console.log(category.type + ": " + category.courses.length);

  const principal = document.getElementById("principal");
  principal.appendChild(divCategory);

  const subtitle = document.createElement('h2');
  console.log(category);
  subtitle.textContent = `${category.name} (${category.courses?.length})`;
  divCategory.appendChild(subtitle);

  const boxe = document.createElement('div');
  boxe.className = 'box';
  const idBox = "box-" + category.type;
  boxe.id = idBox;
  divCategory.appendChild(boxe);
  renderCourses(idBox, category.courses);
}