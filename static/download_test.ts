Feature('download');

Scenario('download file', ({ I }) => {
    I.amOnPage("https://informatika.stei.itb.ac.id/");
    I.click("Homepage Rinaldi Munir");
    I.wait(shortWait);
    I.see("Pengantar");

    I.click("8. Kriptografi dan Koding (S1-STI)");
    I.see("Sekarang:");
    
    I.click("Semester II Tahun 2023/2024");
    I.wait(shortWait);
    I.see("Slide Bahan Kuliah");

    I.handleDownloads();
    I.click("Elliptic Curve Cryptography (ECC)");
    pause();
    I.wait(shortWait);
    I.amInPath("output/downloads");
    I.seeFile("13-ECC-2024.pdf");
});
