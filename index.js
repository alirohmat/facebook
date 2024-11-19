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

    // Menyimpan halaman sebagai PDF
    await page.pdf({
        path: 'facebook_login_page.pdf', // Nama file PDF yang akan disimpan
        format: 'A4' // Format kertas (A4 adalah ukuran standar)
    });

    console.log('PDF telah disimpan!');

    // Tutup browser
    await browser.close();
})();
