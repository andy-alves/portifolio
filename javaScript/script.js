let mascara = document.getElementById('dark-mask');
let lua = document.getElementById('moon');
let sol = document.getElementById('sun');
let root = document.documentElement;
let linkedinPreto = document.getElementById('linkedin');
let githubPreto = document.getElementById('github');
let instagramPreto = document.getElementById('instagram');
function sunMode () {
    mascara.style.position = 'relative';
    mascara.style.right = '113px';
    mascara.style.transition = '0.6s';

    lua.style.position = 'relative';
    lua.style.top = '0px';
    lua.style.opacity = '1';
    lua.style.transition = '0.5s ease-in-out';
    
    sol.style.position = 'relative';
    sol.style.top = '15px';
    sol.style.opacity = '0';
    sol.style.transition = '0.5s ease-in-out';

    root.style.setProperty('--branco', '#081022');
    root.style.setProperty('--azul-escuro', '#f4f4f4');
    root.style.setProperty('--azul-claro', '#081022');
    linkedinPreto.src = 'imagens/linkedin-logo-preta.png';
    githubPreto.src = 'imagens/github-logo-preta.png';
    instagramPreto.src = 'imagens/instagram-logo-preta.png';

}
function moonMode () {
    mascara.style.position = 'relative';
    mascara.style.right = '63px';
    mascara.style.transition = '0.6s';
    root.style.setProperty('--azul-escuro', '#081022');
    root.style.setProperty('--branco', '#ffffff');

    lua.style.position = 'relative';
    lua.style.top = '15px';
    lua.style.opacity = '0';
    lua.style.transition = '0.5s ease-in-out';

    sol.style.position = 'relative';
    sol.style.top = '0px';
    sol.style.opacity = '1';
    sol.style.transition = '0.5s ease-in-out';

    root.style.setProperty('--branco', '#ffffff');
    root.style.setProperty('--azul-escuro', '#081022');
    root.style.setProperty('--azul-claro', '#00c3ff');
    linkedinPreto.src = 'imagens/linkedin-logo.png';
    githubPreto.src = 'imagens/github-logo.png';
    instagramPreto.src = 'imagens/instagram-logo.png';
}