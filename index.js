const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox'] // Menambahkan argumen --no-sandbox
    });
    const page = await browser.newPage();

    // Buka halaman login Facebook
    await page.goto('https://www.facebook.com/login');

    // Tunggu hingga elemen tertentu tersedia (opsional)
    await page.waitForSelector('#email');

    // Ambil HTML seluruh halaman
    const html = await page.content();

    // Cetak HTML ke terminal
    console.log(html);

    // Tutup browser
    await browser.close();
})();
