// common/header.js
document.addEventListener("DOMContentLoaded", function() {
    // 1. Site Name aur Brand Identity setup
    const brandName = "Nexus Pro Tools"; // Yahan se naam badlo, har jagah badal jayega
    const homeLink = "../"; // Home page ka path

    // 2. Favicon add karna
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = '/tool-nexus-pro/favicon.png'; // Yahan se logo path badlo

    // 3. Header/Home Button insert karna
    const headerHTML = `
        <div class="nav-header" style="background: white; padding: 15px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); position: sticky; top: 0; z-index: 100; width: 100%; border-bottom: 1px solid #eee;">
            <div style="max-width: 900px; margin: auto; display: flex; align-items: center; justify-content: space-between;">
                <a href="${homeLink}" style="text-decoration: none; color: #1e40af; font-weight: bold; display: flex; align-items: center; gap: 8px; font-size: 14px;">⬅️ Home</a>
                <span style="font-size: 14px; color: #64748b; font-weight: bold;">${brandName}</span>
            </div>
        </div>
    `;

    // Isko body ke sabse upar inject karna
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
});
