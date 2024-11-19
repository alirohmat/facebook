const puppeteer = require('puppeteer');
const fs = require('fs'); // Modul untuk menulis file

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

    // Menyimpan HTML ke file
    fs.writeFile('facebook_login_page.html', html, (err) => {
        if (err) {
            console.log('Gagal menyimpan file HTML:', err);
        } else {
            console.log('File HTML berhasil disimpan!');
        }
    });

    // Tutup browser
    await browser.close();
})();
