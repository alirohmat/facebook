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

    // Membuat halaman baru dengan HTML yang sudah diambil dan simpan sebagai PDF
    await page.setContent(html);
    await page.pdf({
        path: 'facebook_login_page.pdf', // Nama file PDF yang akan disimpan
        format: 'A4' // Format kertas (A4 adalah ukuran standar)
    });

    console.log('Halaman HTML telah disimpan sebagai PDF!');

    // Tutup browser
    await browser.close();
})();
