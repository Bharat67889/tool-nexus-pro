// common/header.js
document.addEventListener("DOMContentLoaded", function () {

    // 1. Site Name aur Brand Identity setup
    const brandName = "Texus Pro Tools";
    const homeLink = "../";

    // 2. Favicon add karna
    let link = document.querySelector("link[rel~='icon']");

    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }

    link.type = "image/png";
    link.href = "/tool-nexus-pro/favicon.png";

    // 3. Structured Data add karna (SEO / Branding ke liye)
    if (!document.querySelector('script[type="application/ld+json"]')) {

        const structuredData = {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": brandName,
            "url": "https://bharat67889.github.io/tool-nexus-pro/"
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(structuredData);

        document.head.appendChild(script);
    }

    // 4. Open Graph Meta Tags (Google aur Social Preview improve)
    const metaData = [
        {
            property: "og:site_name",
            content: brandName
        },
        {
            property: "og:title",
            content: document.title
        },
        {
            property: "og:image",
            content: "https://bharat67889.github.io/tool-nexus-pro/favicon.png"
        }
    ];

    metaData.forEach(data => {

        if (!document.querySelector(`meta[property="${data.property}"]`)) {

            const meta = document.createElement('meta');

            meta.setAttribute('property', data.property);
            meta.setAttribute('content', data.content);

            document.head.appendChild(meta);
        }
    });

    // 5. Header/Home Button insert karna
    const headerHTML = `
        <div class="nav-header"
            style="
                background: white;
                padding: 15px;
                box-shadow: 0 2px 5px rgba(0,0,0,0.05);
                position: sticky;
                top: 0;
                z-index: 100;
                width: 100%;
                border-bottom: 1px solid #eee;
            ">

            <div style="
                max-width: 900px;
                margin: auto;
                display: flex;
                align-items: center;
                justify-content: space-between;
            ">

                <a href="${homeLink}"
                    style="
                        text-decoration: none;
                        color: #1e40af;
                        font-weight: bold;
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        font-size: 14px;
                    ">
                    ⬅️ Home
                </a>

                <span style="
                    font-size: 14px;
                    color: #64748b;
                    font-weight: bold;
                ">
                    ${brandName}
                </span>

            </div>
        </div>
    `;

    // 6. Isko body ke sabse upar inject karna
    document.body.insertAdjacentHTML('afterbegin', headerHTML);

});
