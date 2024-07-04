import * as dotenv from 'dotenv';

dotenv.config({ path: "./twitter/.env" });

const { I } = inject();

Given('I am on landing page', () => {
    I.amOnPage("https://informatika.stei.itb.ac.id/");
    I.click("Homepage Rinaldi Munir");
    I.wait(2);
    I.see("Pengantar");
});

When('I try to find my materials', () => {
    I.click("8. Kriptografi dan Koding (S1-STI)");
    I.see("Sekarang:");
    
    I.click("Semester II Tahun 2023/2024");
    I.wait(2);
    I.see("Slide Bahan Kuliah");
});

Then('I should be able to download my materials', () => {
    I.handleDownloads();
    I.click("Elliptic Curve Cryptography (ECC)");
    pause();
    I.wait(2);
    I.amInPath("output/downloads");
    I.seeFile("13-ECC-2024.pdf");
});
